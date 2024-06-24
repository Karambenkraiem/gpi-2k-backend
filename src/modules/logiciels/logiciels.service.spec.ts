import { Test, TestingModule } from '@nestjs/testing';
import { LogicielsService } from './logiciels.service';

describe('LogicielsService', () => {
  let service: LogicielsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogicielsService],
    }).compile();

    service = module.get<LogicielsService>(LogicielsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
