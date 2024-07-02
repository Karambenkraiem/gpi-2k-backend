import { Module } from '@nestjs/common';
import { ContratService } from './contrat.service';
import { ContratController } from './contrat.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],

  controllers: [ContratController],
  providers: [ContratService],
})
export class ContratModule {}
