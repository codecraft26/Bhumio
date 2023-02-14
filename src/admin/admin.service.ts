import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schemas';
import { CreateAdminDto} from './dto/create-admin.dto';
import { Promise } from 'mongoose';
import { throttleTime } from 'rxjs';


@Injectable()
export class AdminService {
  


  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){ }

  async createUser(CreateUserDto:CreateAdminDto):Promise<User>{
    const createUser= await new this.userModel(CreateUserDto)
    return createUser.save();
}

async getUserByUserName(email:string){

  const userm=await this.userModel.findOne({email})  
  return userm;

}


async getAllUser():Promise<User[]>{
  return this.userModel.find()
}




}

