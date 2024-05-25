import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialiteDto } from './create-specialite.dto';
import { Prisma } from '@prisma/client';

export class UpdateSpecialiteDto extends PartialType(CreateSpecialiteDto) {
    idSpecialite: string;
    nom: string;
    Utilisateur?: Prisma.UtilisateurCreateNestedManyWithoutSpecialiteInput;
    Departement?: Prisma.DepartementCreateNestedOneWithoutSpecialiteInput;
}
