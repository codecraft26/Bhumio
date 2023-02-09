import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoweruserService } from './poweruser.service';
import { CreatePoweruserDto } from './dto/create-poweruser.dto';
import { UpdatePoweruserDto } from './dto/update-poweruser.dto';

@Controller('poweruser')
export class PoweruserController {
  constructor(private readonly poweruserService: PoweruserService) {}

  @Post()
  create(@Body() createPoweruserDto: CreatePoweruserDto) {
    return this.poweruserService.create(createPoweruserDto);
  }

  @Get()
  findAll() {
    return this.poweruserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poweruserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoweruserDto: UpdatePoweruserDto) {
    return this.poweruserService.update(+id, updatePoweruserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poweruserService.remove(+id);
  }
}
