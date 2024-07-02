import { Prisma } from "@prisma/client";

export class CreateDepartementDto implements Prisma.DepartementCreateInput {
    idDepartement: string;
    nom: string;
    Specialite?: Prisma.SpecialiteCreateNestedManyWithoutDepartementInput;
    statutDepartement?: string;
}
