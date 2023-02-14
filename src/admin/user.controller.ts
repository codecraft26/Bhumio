import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
import { RoleGaurd } from 'src/role.gaurds';
import { CONSTANTS } from 'src/Constants';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly authService:AuthService,private readonly userService:UserService) {}

  @Post("/login")

  @UseGuards(AuthGuard("local"))
  login(@Request() req): string {

    //authentication completed 

    //next authorization

    // now implementing jwt auth

    
    
      return this.authService.generateToken(req.user)
   
  }
  // @Get("/android")
  // @UseGuards(AuthGuard("jwt"),new RoleGaurd(CONSTANTS.ROLES.ADMIN))

  // androidDeveloperData(@Request() req):string{
  //   return "this is private data for android developer "+JSON.stringify(req.user)
  // }

  @Get("/web")
  @UseGuards(AuthGuard("jwt"),new RoleGaurd(CONSTANTS.ROLES.ADMIN))

  webDeveloperData(@Request() req):string{
    return "this is private data for web developer"+JSON.stringify(req.user)
  }


@Post("/create")
@UseGuards(AuthGuard("jwt"),new RoleGaurd(CONSTANTS.ROLES.ADMIN))

createUser(user:User){
  return this.userService.addUser(user);
}

@Get('users')
@UseGuards(AuthGuard("jwt"),new RoleGaurd(CONSTANTS.ROLES.ADMIN))

getAllUser(){
  return this.userService.getAllUser()
}

  
}
