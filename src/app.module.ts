import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocieteModule } from './modules/societe/societe.module';
import { UtilisateurModule } from './modules/utilisateur/utilisateur.module';
import { MaterielModule } from './modules/materiel/materiel.module';
import { DepartementModule } from './modules/departement/departement.module';

@Module({
  imports: [SocieteModule, UtilisateurModule, MaterielModule, DepartementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
