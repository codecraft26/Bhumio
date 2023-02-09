import { Test, TestingModule } from '@nestjs/testing';
import { PoweruserService } from './poweruser.service';

describe('PoweruserService', () => {
  let service: PoweruserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoweruserService],
    }).compile();

    service = module.get<PoweruserService>(PoweruserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
