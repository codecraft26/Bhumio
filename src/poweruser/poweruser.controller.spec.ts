import { Test, TestingModule } from '@nestjs/testing';
import { PoweruserController } from './poweruser.controller';
import { PoweruserService } from './poweruser.service';

describe('PoweruserController', () => {
  let controller: PoweruserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoweruserController],
      providers: [PoweruserService],
    }).compile();

    controller = module.get<PoweruserController>(PoweruserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
