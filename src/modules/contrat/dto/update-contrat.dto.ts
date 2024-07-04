import { PartialType } from '@nestjs/mapped-types';
import { CreateContratDto } from './create-contrat.dto';
import { Prisma } from '@prisma/client';

export class UpdateContratDto extends PartialType(CreateContratDto) {
    dateDebutContrat?: string | Date;
    dateFinContrat?: string | Date;
    montantContrat?: number;
    etatContrat?: string;
    contratRenouvable?: boolean;
    descriptionContrat?: string;
    typeContrat?: string;
    Signature?: Prisma.SignatureCreateNestedManyWithoutContratInput;


}
