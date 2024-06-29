import { PartialType } from '@nestjs/mapped-types';
import { CreateSocieteDto } from './create-societe.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateSocieteDto extends PartialType(CreateSocieteDto) {
    raisonSociale: string;
    adresse: string;
    responsable: string;
    email: string;
    numtel: string;
    secteurActivite: string;
    typeSociete: $Enums.TypeSociete ;
    Materiel?: Prisma.MaterielCreateNestedManyWithoutSocieteInput;
    


}
