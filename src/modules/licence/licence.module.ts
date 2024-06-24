import { Module } from '@nestjs/common';
import { LicenceService } from './licence.service';
import { LicenceController } from './licence.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],

  controllers: [LicenceController],
  providers: [LicenceService],
})
export class LicenceModule {}
