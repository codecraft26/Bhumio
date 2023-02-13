import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User } from 'src/user/schemas/User';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Request  } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  
  @Post('login')

  addUser(@Body() data:any , @Request() req){

    return this.adminService.createUser(data)  +JSON.stringify(req.user)


  }

  
}
