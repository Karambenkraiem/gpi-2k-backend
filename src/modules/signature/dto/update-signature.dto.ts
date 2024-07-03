import { PartialType } from '@nestjs/mapped-types';
import { CreateSignatureDto } from './create-signature.dto';
import { Prisma } from '@prisma/client';

export class UpdateSignatureDto extends PartialType(CreateSignatureDto) {
    dateSignature?: string | Date;
    Contrat?: Prisma.ContratCreateNestedOneWithoutSignatureInput;
    Societe?: Prisma.SocieteCreateNestedOneWithoutSignatureInput;
}
