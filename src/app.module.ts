import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocieteModule } from './modules/societe/societe.module';
import { UtilisateurModule } from './modules/utilisateur/utilisateur.module';
import { MaterielModule } from './modules/materiel/materiel.module';
import { DepartementModule } from './modules/departement/departement.module';
import { SpecialiteModule } from './modules/specialite/specialite.module';
import { AffectationModule } from './modules/affectation/affectation.module';
import { EmpruntModule } from './modules/emprunt/emprunt.module';
import { StocksModule } from './modules/stocks/stocks.module';
import { LogicielsModule } from './modules/logiciels/logiciels.module';
import { AlimentationModule } from './modules/alimentation/alimentation.module';
import { InstallationModule } from './modules/installation/installation.module';
import { LicenceModule } from './modules/licence/licence.module';
import { ConsommationModule } from './modules/consommation/consommation.module';
import { ContratModule } from './modules/contrat/contrat.module';


@Module({
  imports: [SocieteModule, UtilisateurModule, MaterielModule, DepartementModule, SpecialiteModule, AffectationModule, EmpruntModule, StocksModule, LogicielsModule, AlimentationModule, LicenceModule, InstallationModule, ConsommationModule, ContratModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
