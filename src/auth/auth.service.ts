import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { UnauthorizedException } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Logger } from '@nestjs/common';
import { NodemailerService } from 'src/nodemailer/nodemailer.service';
import { Product } from 'src/product/schema/product.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
    private readonly eventEmitter: EventEmitter2,
    private readonly NodeMailerService: NodemailerService,
  ) {}
  private readonly logger = new Logger(AuthService.name);

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });
    this.eventEmitter.emit('user.created', { email, token });
    this.logger.log('user created');

    return { token };
  }
  
  // when admin created user he send a confirmation mail via mail

  @OnEvent('user.created')
  handleUserCreated(event: { email: string; token: string }) {
    this.NodeMailerService.sendUserConfirmation(event.email, event.token);
    this.logger.log('mail sent');
  }

  async login(loginDto: LoginDto): Promise<{token}> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    return  { token };
  }

  //service for update password
  async changePassword(id, signUpDto: SignUpDto): Promise<User> {
    const { email, password } = signUpDto;
    const userd = await this.userModel.findOne({ email });
    if (!userd) {
      throw new UnauthorizedException('Invalid email or password');
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      userd.password = hashedPassword;
      return userd.save();
    }
  }


  // async productCreatd(id: string): Promise<Product> {



  // }

  async getAllUser(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  getUserById(id: String): Promise<User> {
    return this.userModel.findById(id).exec();
  }
}
