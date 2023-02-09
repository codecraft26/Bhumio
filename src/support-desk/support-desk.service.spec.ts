import { Test, TestingModule } from '@nestjs/testing';
import { SupportDeskService } from './support-desk.service';

describe('SupportDeskService', () => {
  let service: SupportDeskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupportDeskService],
    }).compile();

    service = module.get<SupportDeskService>(SupportDeskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
