import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenceDto } from './create-licence.dto';
import { Prisma } from '@prisma/client';

export class UpdateLicenceDto extends PartialType(CreateLicenceDto) {
  numeroLicence: string;
  dateActivation?: string | Date;
  dateExpiration?: string | Date;
  prixLicence?: number;
  statutLicence?: string;
  Installation?: Prisma.InstallationCreateNestedManyWithoutLicenceInput;
  Logiciel?: Prisma.LogicielCreateNestedOneWithoutLicenceInput;
}
