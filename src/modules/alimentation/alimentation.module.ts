import { Module } from '@nestjs/common';
import { AlimentationService } from './alimentation.service';
import { AlimentationController } from './alimentation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [AlimentationController],
  providers: [AlimentationService],
})
export class AlimentationModule {}
