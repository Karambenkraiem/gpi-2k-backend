import { $Enums, Prisma } from "@prisma/client";

export class CreateUtilisateurDto implements Prisma.UtilisateurCreateInput{
    idUtilisateur: number;
    password: string;
    fullName: string;
    email: string;
    createdAt?: string | Date;
    lastLogin?: string | Date;
    roleUtilisateur?: $Enums.RoleUtilisateur;
    etatUtilisateur?: $Enums.EtatUtilisateur;
    telFix?: string;
    telMobile?: string;
    Affectation?: Prisma.AffectationCreateNestedManyWithoutUtilisateurInput;
    Emprunt?: Prisma.EmpruntCreateNestedManyWithoutUtilisateurInput;
    Specialite?: Prisma.SpecialiteCreateNestedOneWithoutUtilisateurInput;
    
}