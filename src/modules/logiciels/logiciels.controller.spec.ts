import { Test, TestingModule } from '@nestjs/testing';
import { LogicielsController } from './logiciels.controller';
import { LogicielsService } from './logiciels.service';

describe('LogicielsController', () => {
  let controller: LogicielsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogicielsController],
      providers: [LogicielsService],
    }).compile();

    controller = module.get<LogicielsController>(LogicielsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
