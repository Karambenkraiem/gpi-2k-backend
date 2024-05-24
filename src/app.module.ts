import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocieteModule } from './modules/societe/societe.module';
import { UtilisateurModule } from './modules/utilisateur/utilisateur.module';

@Module({
  imports: [SocieteModule, UtilisateurModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
