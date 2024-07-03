import { Prisma } from "@prisma/client";

export class CreateSignatureDto implements Prisma.SignatureCreateInput {
    dateSignature?: string | Date;
    Contrat?: Prisma.ContratCreateNestedOneWithoutSignatureInput;
    Societe?: Prisma.SocieteCreateNestedOneWithoutSignatureInput;

}
