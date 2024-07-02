import { $Enums, Prisma } from "@prisma/client";

export class CreateContratDto implements Prisma.ContratCreateInput {
    dateDebutContrat?: string | Date;
    dateFinContrat?: string | Date;
    montantContrat: number;
    descriptionContrat: string;
    contratRenouvable: boolean;
    typeContrat: $Enums.TypeContrat;
    etatContrat: $Enums.EtatContrat;
    
}
