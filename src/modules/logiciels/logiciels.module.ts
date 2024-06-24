import { Module } from '@nestjs/common';
import { LogicielsService } from './logiciels.service';
import { LogicielsController } from './logiciels.controller';

@Module({
  controllers: [LogicielsController],
  providers: [LogicielsService],
})
export class LogicielsModule {}
