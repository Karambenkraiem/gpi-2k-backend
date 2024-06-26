import { PartialType } from '@nestjs/mapped-types';
import { CreateAffectationDto } from './create-affectation.dto';
import { Prisma } from '@prisma/client';

export class UpdateAffectationDto extends PartialType(CreateAffectationDto) {
  dateAttribution: string | Date;
  dateRetour?: string | Date;
  motifRetour?: string;
  utilisateur: Prisma.UtilisateurCreateNestedOneWithoutAffectationInput;
  materiel: Prisma.MaterielCreateNestedOneWithoutAffectationInput;
}
