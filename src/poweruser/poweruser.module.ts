import { Module } from '@nestjs/common';
import { PoweruserService } from './poweruser.service';
import { PoweruserController } from './poweruser.controller';

@Module({
  controllers: [PoweruserController],
  providers: [PoweruserService]
})
export class PoweruserModule {}
