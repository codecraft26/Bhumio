import { Injectable } from '@nestjs/common';
import { CreateSupportDeskDto } from './dto/create-support-desk.dto';
import { UpdateSupportDeskDto } from './dto/update-support-desk.dto';

@Injectable()
export class SupportDeskService {
  create(createSupportDeskDto: CreateSupportDeskDto) {
    return 'This action adds a new supportDesk';
  }

  findAll() {
    return `This action returns all supportDesk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supportDesk`;
  }

  update(id: number, updateSupportDeskDto: UpdateSupportDeskDto) {
    return `This action updates a #${id} supportDesk`;
  }

  remove(id: number) {
    return `This action removes a #${id} supportDesk`;
  }
}
