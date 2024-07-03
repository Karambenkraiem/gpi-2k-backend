import { PartialType } from '@nestjs/mapped-types';
import { CreateContratDto } from './create-contrat.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateContratDto extends PartialType(CreateContratDto) {
    dateDebutContrat?: string | Date;
    dateFinContrat?: string | Date;
    montantContrat: number;
    descriptionContrat: string;
    contratRenouvable?: boolean;
    typeContrat?: $Enums.TypeContrat;
    etatContrat?: $Enums.EtatContrat;
    Signature?: Prisma.SignatureCreateNestedManyWithoutContratInput;
  
}
