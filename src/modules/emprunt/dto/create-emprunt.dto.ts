import { $Enums, Prisma } from "@prisma/client";

export class CreateEmpruntDto implements Prisma.EmpruntCreateInput{
    dateEmprunt: string | Date;
    dateRestitution?: string | Date;
    refProjet: $Enums.RefProjet;
    etatMatRestitution: string;
    utilisateur: Prisma.UtilisateurCreateNestedOneWithoutEmpruntInput;
    materiel: Prisma.MaterielCreateNestedOneWithoutEmpruntInput;
}
