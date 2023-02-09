import { Module } from '@nestjs/common';
import { SupportDeskService } from './support-desk.service';
import { SupportDeskController } from './support-desk.controller';

@Module({
  controllers: [SupportDeskController],
  providers: [SupportDeskService]
})
export class SupportDeskModule {}
