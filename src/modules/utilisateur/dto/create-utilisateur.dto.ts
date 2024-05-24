import { Prisma } from "@prisma/client";

export class CreateUtilisateurDto implements Prisma.UtilisateurCreateInput {
    idUtilisateur: number;
    password: string;
    fullName: string;
    email: string;
    createdAt?: string | Date;
    lastLogin?: string | Date;
    role: string;
    etat: string;
    telFix?: string;
    telMobile?: string;
    Affectation?: Prisma.AffectationCreateNestedManyWithoutUtilisateurInput;
    Emprunt?: Prisma.EmpruntCreateNestedManyWithoutUtilisateurInput;
    Specialite?: Prisma.SpecialiteCreateNestedOneWithoutUtilisateurInput;
}
