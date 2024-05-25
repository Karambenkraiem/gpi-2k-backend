import { Module } from '@nestjs/common';
import { MaterielService } from './materiel.service';
import { MaterielController } from './materiel.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MaterielController],
  providers: [MaterielService],
})
export class MaterielModule {}
