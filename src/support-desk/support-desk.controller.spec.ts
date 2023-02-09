import { Test, TestingModule } from '@nestjs/testing';
import { SupportDeskController } from './support-desk.controller';
import { SupportDeskService } from './support-desk.service';

describe('SupportDeskController', () => {
  let controller: SupportDeskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupportDeskController],
      providers: [SupportDeskService],
    }).compile();

    controller = module.get<SupportDeskController>(SupportDeskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
