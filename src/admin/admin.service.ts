import { Injectable, Post } from '@nestjs/common';
import { User } from 'src/user/schemas/User';


@Injectable()
export class AdminService {

      @Post('user')

      createUser(user:User){

          

      }


 
}
