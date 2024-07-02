import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialiteDto } from './create-specialite.dto';
import { Prisma } from '@prisma/client';

export class UpdateSpecialiteDto extends PartialType(CreateSpecialiteDto) implements Prisma.SpecialiteCreateInput {
    Departement?: Prisma.DepartementCreateNestedOneWithoutSpecialiteInput;
    Utilisateur?: Prisma.UtilisateurCreateNestedManyWithoutSpecialiteInput;
    idSpecialite: string;
    nom: string;
    statutSpecialite?: string;
    
}
