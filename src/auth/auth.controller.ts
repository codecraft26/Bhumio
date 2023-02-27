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
  
   
    
    //anyone can access this route including admin and poweruser and also user
    @Get('/login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
      return this.authService.login(loginDto);
    }



    //only admin have access to create poweruser 
    @Post('/createuser')
    @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.POWERUSER))
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
      return this.authService.signUp(signUpDto);
    }



    // only poweuser has an access to get all the transection
    @Get('/users')
    @UseGuards(AuthGuard('jwt'),new RoleGaurd(CONSTANTS.ROLES.POWERUSER))
    getAllUsers():Promise<User[]>{
      return this.authService.getAllUser();

    }
    


    @Post('/updateuser/:id')

    @UseGuards(AuthGuard('jwt'))
    updatePassword(@Param('id') id:string,@Body() signUpDto: SignUpDto):Promise<User>{
      return this.authService.changePassword(id,signUpDto);

    }





   

   
 
}
