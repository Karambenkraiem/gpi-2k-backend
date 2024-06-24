import { Prisma } from "@prisma/client";

export class CreateStockDto implements Prisma.StocksCreateInput{
    refArt: string;
    marque: string;
    modele: string;
    prix: number;
    quantiteStock: number;
    Alimentation?: Prisma.AlimentationCreateNestedManyWithoutStocksInput;
}
