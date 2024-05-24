import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
})
export class UtilisateurModule {}
