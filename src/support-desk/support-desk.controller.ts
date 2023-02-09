import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupportDeskService } from './support-desk.service';
import { CreateSupportDeskDto } from './dto/create-support-desk.dto';
import { UpdateSupportDeskDto } from './dto/update-support-desk.dto';

@Controller('support-desk')
export class SupportDeskController {
  constructor(private readonly supportDeskService: SupportDeskService) {}

  @Post()
  create(@Body() createSupportDeskDto: CreateSupportDeskDto) {
    return this.supportDeskService.create(createSupportDeskDto);
  }

  @Get()
  findAll() {
    return this.supportDeskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supportDeskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupportDeskDto: UpdateSupportDeskDto) {
    return this.supportDeskService.update(+id, updateSupportDeskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supportDeskService.remove(+id);
  }
}
