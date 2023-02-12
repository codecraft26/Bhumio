import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { User } from 'src/user/schemas/User';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  


  
}
