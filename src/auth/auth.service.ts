
import { Inject, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/schema/user.schema";
@Injectable()
export class AuthService{
    constructor(private readonly jwtService:JwtService){


    }
        //generate id card
    generateToken(payload:User){
        return  this.jwtService.sign(payload)
    }

}