import { Prisma } from "@prisma/client";

export class CreateSocieteDto implements Prisma.SocieteCreateInput {
    raisonSociale: string;
    adresse: string;
    responsable: string;
    email: string;
    numtel: string;
    secteurActivite: string;
    typeSociete: string;
    Materiel?: Prisma.MaterielCreateNestedManyWithoutSocieteInput;
   
   
}
