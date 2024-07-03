import { Prisma } from "@prisma/client";


export class CreateIncidentDto implements Prisma.IncidentCreateInput{
    priorite: string;
    dateCreation?: string | Date;
    dateCloture?: string | Date;
    natureIncident: string;
    solutionRealisee: string;
    etatReclamation: string;
    emplacement: string;
    demandeur?: Prisma.UtilisateurCreateNestedOneWithoutIncidentsDemandeurInput;
    intervenant?: Prisma.UtilisateurCreateNestedOneWithoutIncidentsIntervenantInput;
    Materiel?: Prisma.MaterielCreateNestedOneWithoutIncidentInput;
    Logiciel?: Prisma.LogicielCreateNestedOneWithoutIncidentInput;
}
