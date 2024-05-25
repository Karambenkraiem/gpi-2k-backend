import { Module } from '@nestjs/common';
import { SpecialiteService } from './specialite.service';
import { SpecialiteController } from './specialite.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SpecialiteController],
  providers: [SpecialiteService],
})
export class SpecialiteModule {}
