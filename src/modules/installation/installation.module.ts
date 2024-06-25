import { Module } from '@nestjs/common';
import { InstallationService } from './installation.service';
import { InstallationController } from './installation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [InstallationController],
  providers: [InstallationService],
})
export class InstallationModule {}
