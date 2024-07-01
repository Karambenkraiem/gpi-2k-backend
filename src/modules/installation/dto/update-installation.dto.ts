import { PartialType } from '@nestjs/mapped-types';
import { CreateInstallationDto } from './create-installation.dto';
import { Prisma } from '@prisma/client';

export class UpdateInstallationDto extends PartialType(CreateInstallationDto) {
  Licence?: Prisma.LicenceCreateNestedOneWithoutInstallationInput;
  Materiel?: Prisma.MaterielCreateNestedOneWithoutInstallationInput;
  dateInstallation?: string | Date;
  dateDesinstallation?: string | Date;
  etatOperation?: string;
}
