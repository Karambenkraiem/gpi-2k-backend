import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartementDto } from './create-departement.dto';
import { Prisma } from '@prisma/client';

export class UpdateDepartementDto extends PartialType(CreateDepartementDto) {
    idDepartement: string;
    nom: string;
    Specialite?: Prisma.SpecialiteCreateNestedManyWithoutDepartementInput;
    statutDepartement?: string;
    
}
