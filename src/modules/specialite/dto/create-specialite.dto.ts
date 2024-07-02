import { Prisma } from "@prisma/client";

export class CreateSpecialiteDto implements Prisma.SpecialiteCreateInput {
    idSpecialite: string;
    nom: string;
    statutSpecialite?: string;
    Utilisateur?: Prisma.UtilisateurCreateNestedManyWithoutSpecialiteInput;
    Departement?: Prisma.DepartementCreateNestedOneWithoutSpecialiteInput;
    
}
