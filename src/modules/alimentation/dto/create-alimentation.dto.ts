import { Prisma } from "@prisma/client";

export class CreateAlimentationDto implements Prisma.AlimentationCreateInput {
   
    Societe: Prisma.SocieteCreateNestedOneWithoutAlimentationInput;
    Stocks: Prisma.StocksCreateNestedOneWithoutAlimentationInput;
    quantiteAlimente: number;
    dateAlimentation?: string | Date;
}
