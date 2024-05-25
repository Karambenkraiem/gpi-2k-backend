import { Prisma } from "@prisma/client";

export class CreateSpecialiteDto implements Prisma.SpecialiteCreateInput {
    idSpecialite: string;
    nom: string;
    Utilisateur?: Prisma.UtilisateurCreateNestedManyWithoutSpecialiteInput;
    Departement?: Prisma.DepartementCreateNestedOneWithoutSpecialiteInput;
}
