import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentDto } from './create-incident.dto';
import { Prisma } from '@prisma/client';

export class UpdateIncidentDto extends PartialType(CreateIncidentDto) {
    priorite: string;
    dateCreation: string | Date;
    dateCloture: string | Date;
    natureIncident: string;
    solutionRealisee: string;
    etatReclamation: string;
    emplacement: string;
    demandeur?: Prisma.UtilisateurCreateNestedOneWithoutIncidentsDemandeurInput;
    intervenant?: Prisma.UtilisateurCreateNestedOneWithoutIncidentsIntervenantInput;
    Materiel?: Prisma.MaterielCreateNestedOneWithoutIncidentInput;
    Logiciel?: Prisma.LogicielCreateNestedOneWithoutIncidentInput;
}
