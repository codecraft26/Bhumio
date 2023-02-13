import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { model, Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schemas/User';
import { CreateAdminDto} from './dto/create-admin.dto';


@Injectable()
export class AdminService {



      constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){

      }

     

      createUser(CreateAdminDto:CreateAdminDto){

            const model=new this.userModel();
            model.name=CreateAdminDto.name
            model.email=CreateAdminDto.email
            model.password=CreateAdminDto.password
           


          

      }


 
}
