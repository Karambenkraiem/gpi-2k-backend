import { Prisma } from "@prisma/client";

export class CreateDepartementDto implements Prisma.DepartementCreateInput {
    idDepartement: string;
    nom: string;
    statutDepartement?: string;
    Specialite?: Prisma.SpecialiteCreateNestedManyWithoutDepartementInput;
    
}
