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
<<<<<<< HEAD
import { AlimentationModule } from './modules/alimentation/alimentation.module';
=======
import { InstallationModule } from './modules/installation/installation.module';
>>>>>>> 3ab1ce8c2296cfb6b39f219be2a6e50f84519c9d
import { LicenceModule } from './modules/licence/licence.module';


@Module({
<<<<<<< HEAD
  imports: [SocieteModule, UtilisateurModule, MaterielModule, DepartementModule, SpecialiteModule, AffectationModule, EmpruntModule, StocksModule, LogicielsModule, AlimentationModule, LicenceModule],
=======
  imports: [SocieteModule, UtilisateurModule, MaterielModule, DepartementModule, SpecialiteModule, AffectationModule, EmpruntModule, StocksModule, LogicielsModule, AlimentationModule, LicenceModule, InstallationModule],
>>>>>>> 3ab1ce8c2296cfb6b39f219be2a6e50f84519c9d
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
