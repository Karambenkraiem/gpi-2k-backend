import { Module } from '@nestjs/common';
import { ConsommationService } from './consommation.service';
import { ConsommationController } from './consommation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],

  controllers: [ConsommationController],
  providers: [ConsommationService],
})
export class ConsommationModule {}
