import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post('create')
  createUser(@Body() createUserDto:CreateUserDto):Promise<User>{
    return this.userService.createUser(createUserDto)
  }

  @Get(':id')
  findByid(@Param('id') id:string){
    return this.userService.findByid(id);
  }
 






}
