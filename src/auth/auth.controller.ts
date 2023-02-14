import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schema/user.schema';
import { AuthGuard } from '@nestjs/passport';
import { RoleGaurd } from 'src/role.gaurds';
import { CONSTANTS } from 'src/Constants';


@Controller('auth')

  export class AuthController {
    constructor(private authService: AuthService) {}
  
   
    
  
    @Get('/login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
      return this.authService.login(loginDto);
    }



    //only admin have access to create poweruser and user
    @Post('/createuser')
    @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.ADMIN))
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
      return this.authService.signUp(signUpDto);
    }



    // only poweuser has an access to get all the transection

    @Get('/users')
    @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.POWERUSER))
    getAllUsers():Promise<User[]>{
      return this.authService.getAllUser();

    }
 
}
