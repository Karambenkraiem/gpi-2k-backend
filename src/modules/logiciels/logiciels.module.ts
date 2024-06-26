import { Module } from '@nestjs/common';
import { LogicielsService } from './logiciels.service';
import { LogicielsController } from './logiciels.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],

  controllers: [LogicielsController],
  providers: [LogicielsService],
})
export class LogicielsModule {}
