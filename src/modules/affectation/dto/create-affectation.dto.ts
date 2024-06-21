import { Prisma } from '@prisma/client';

export class CreateAffectationDto implements Prisma.AffectationCreateInput {
  dateAttribution: string | Date;
  dateRetour?: string | Date;
  motifRetour?: string;
  etatAffectation?: string;
  utilisateur: Prisma.UtilisateurCreateNestedOneWithoutAffectationInput;
  materiel: Prisma.MaterielCreateNestedOneWithoutAffectationInput;
}
