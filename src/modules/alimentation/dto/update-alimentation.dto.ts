import { PartialType } from '@nestjs/mapped-types';
import { CreateAlimentationDto } from './create-alimentation.dto';
import { Prisma } from '@prisma/client';

export class UpdateAlimentationDto extends PartialType(CreateAlimentationDto) {
    Societe: Prisma.SocieteCreateNestedOneWithoutAlimentationInput;
    Stocks: Prisma.StocksCreateNestedOneWithoutAlimentationInput;
    quantiteAlimente: number;
    dateAlimentation?: string | Date;
}

