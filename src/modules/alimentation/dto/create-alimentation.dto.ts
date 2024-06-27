import { $Enums, Prisma } from "@prisma/client";

export class CreateAlimentationDto implements Prisma.AlimentationCreateInput{
    dateAlimentation?: string | Date;
    quantiteAlimente: number;
    Societe: Prisma.SocieteCreateNestedOneWithoutAlimentationInput;
    Stocks: Prisma.StocksCreateNestedOneWithoutAlimentationInput;

   
}
