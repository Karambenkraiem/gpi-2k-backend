import { Prisma } from '@prisma/client';

export class CreateAffectationDto implements Prisma.AffectationCreateInput {
  dateAttribution: string | Date;
  dateRetour?: string | Date;
  motifRetour?: string;
  Utilisateur?: Prisma.UtilisateurCreateNestedOneWithoutAffectationInput;
  Materiel?: Prisma.MaterielCreateNestedOneWithoutAffectationInput;
  
}
