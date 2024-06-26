import { $Enums, Prisma } from '@prisma/client';

export class CreateEmpruntDto implements Prisma.EmpruntCreateInput {
  idUtilisateur?: number;
  numerSerie?: String;
  dateEmprunt: string | Date;
  dateRestitution?: string | Date;
  refProjet: string;
  etatMatRestitution?: string;
  etatEmprunt?: string;
  utilisateur: Prisma.UtilisateurCreateNestedOneWithoutEmpruntInput;
  materiel: Prisma.MaterielCreateNestedOneWithoutEmpruntInput;
}
