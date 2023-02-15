import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';


@Controller('nodemailer')
export class NodemailerController {
  constructor(private readonly nodemailerService: NodemailerService) {}

  @Get()
  SendEail(){
    return this.nodemailerService.sendUserConfirmation('gaman0221@gmail.com')
  }

}
