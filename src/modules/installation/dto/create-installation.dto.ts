import { Prisma } from '@prisma/client';

export class CreateInstallationDto implements Prisma.InstallationCreateInput {
  Licence?: Prisma.LicenceCreateNestedOneWithoutInstallationInput;
  Materiel?: Prisma.MaterielCreateNestedOneWithoutInstallationInput;
  dateInstallation?: string | Date;
  dateDesinstallation?: string | Date;
}
