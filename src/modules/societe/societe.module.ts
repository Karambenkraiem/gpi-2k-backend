import { Module } from '@nestjs/common';
import { SocieteService } from './societe.service';
import { SocieteController } from './societe.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [SocieteController],
  providers: [SocieteService],
})
export class SocieteModule {}
