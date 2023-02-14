import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { User } from './schemas/user.schemas';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('create')
  createUser(@Body() CreateAdminDto:CreateAdminDto):Promise<User>{
    return this.adminService.createUser(CreateAdminDto)
  }

  @Get('alluser')
  getAllUser(){

    return this.adminService.getAllUser()

  }
  





}
