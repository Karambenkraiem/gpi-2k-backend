import { PartialType } from '@nestjs/mapped-types';
import { CreateLogicielDto } from './create-logiciel.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateLogicielDto extends PartialType(CreateLogicielDto) {
    libele: string;
    version: string;
    editeur: string;
    dateAcquisition?: string | Date;
    typeLogiciel: $Enums.TypeLogiciel;
    Societe?: Prisma.SocieteCreateNestedOneWithoutLogicielInput;
    Licence?: Prisma.LicenceCreateNestedManyWithoutLogicielInput;
}
