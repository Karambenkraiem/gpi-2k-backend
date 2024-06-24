import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDto } from './create-stock.dto';
import { Prisma } from '@prisma/client';

export class UpdateStockDto extends PartialType(CreateStockDto) {
    refArt: string;
    marque: string;
    modele: string;
    prix: number;
    quantiteStock: number;
    Alimentation?: Prisma.AlimentationCreateNestedManyWithoutStocksInput;
}

