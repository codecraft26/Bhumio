import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){





  }



  createUser(CreateUserDto:CreateUserDto):Promise<User>{
      const createUser=new this.userModel(CreateUserDto)
      return createUser.save();
  }


  findByid(id:string):Promise<User>{

    return this.userModel.findById(id).exec();
  }

  getByEmail(email:string):Promise<User[] |undefined>{

  return this.userModel.find((user:User)=>user.email===email).exec();



  }



 
}
