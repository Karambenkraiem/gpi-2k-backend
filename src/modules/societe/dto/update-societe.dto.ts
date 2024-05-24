import { PartialType } from '@nestjs/mapped-types';
import { CreateSocieteDto } from './create-societe.dto';
import { Prisma } from '@prisma/client';

export class UpdateSocieteDto extends PartialType(CreateSocieteDto) {
    raisonSociale: string;
    adresse: string;
    responsable: string;
    email: string;
    numtel: string;
    secteurActivite: string;
    typeSociete: string;
    Materiel?: Prisma.MaterielCreateNestedManyWithoutSocieteInput;
}
