import { Injectable } from '@nestjs/common';
import { CreatePoweruserDto } from './dto/create-poweruser.dto';
import { UpdatePoweruserDto } from './dto/update-poweruser.dto';

@Injectable()
export class PoweruserService {
  create(createPoweruserDto: CreatePoweruserDto) {
    return 'This action adds a new poweruser';
  }

  findAll() {
    return `This action returns all poweruser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poweruser`;
  }

  update(id: number, updatePoweruserDto: UpdatePoweruserDto) {
    return `This action updates a #${id} poweruser`;
  }

  remove(id: number) {
    return `This action removes a #${id} poweruser`;
  }
}
