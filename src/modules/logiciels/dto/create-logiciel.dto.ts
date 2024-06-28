import { $Enums, Prisma } from "@prisma/client";

export class CreateLogicielDto implements Prisma.LogicielCreateInput {
    libelle: string;
    version: string;
    editeur: string;
    dateAcquisition?: string | Date;
    typeLogiciel: $Enums.TypeLogiciel;
    Societe?: Prisma.SocieteCreateNestedOneWithoutLogicielInput;
    Licence?: Prisma.LicenceCreateNestedManyWithoutLogicielInput;
    
   
}
