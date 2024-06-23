import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpruntDto } from './create-emprunt.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateEmpruntDto extends PartialType(CreateEmpruntDto) {
  dateEmprunt: string | Date;
  dateRestitution?: string | Date;
  refProjet: string;
  etatMatRestitution?: string;
  etatEmprunt?: string;
  utilisateur: Prisma.UtilisateurCreateNestedOneWithoutEmpruntInput;
  materiel: Prisma.MaterielCreateNestedOneWithoutEmpruntInput;
}
