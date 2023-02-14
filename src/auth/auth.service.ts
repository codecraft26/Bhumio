import { Injectable } from '@nestjs/common';
import { User } from 'src/admin/user.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService{
    constructor(private readonly jwtService:JwtService){


    }
        //generate id card
    generateToken(payload:User){
        return  this.jwtService.sign(payload)
    }

}
