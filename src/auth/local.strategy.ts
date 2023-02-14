import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from "passport-local"
import { UserService } from "src/user/user.service";
import { User } from "src/user/schema/user.schema";
import { AuthService } from "./auth.service";

@Injectable()

export class LocalStrategy extends PassportStrategy(Strategy){


    
    constructor( private readonly authService:AuthService){
        super();

    }


  async  validate(username:string,password:string):Promise<any>{
        // const user:User=this.userService.getByEmail(username);

        const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  } 

}