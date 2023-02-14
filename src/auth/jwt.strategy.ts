import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import {ExtractJwt,Strategy} from 'passport-jwt'


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){


    
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "key",

        });

    }


    validate(payload:any):any{
        return payload

    }

}