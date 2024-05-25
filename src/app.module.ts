import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocieteModule } from './modules/societe/societe.module';
import { UtilisateurModule } from './modules/utilisateur/utilisateur.module';
import { MaterielModule } from './modules/materiel/materiel.module';
import { DepartementModule } from './modules/departement/departement.module';
import { SpecialiteModule } from './modules/specialite/specialite.module';
import { AffectationModule } from './modules/affectation/affectation.module';

@Module({
  imports: [SocieteModule, UtilisateurModule, MaterielModule, DepartementModule, SpecialiteModule, AffectationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
