import { PartialType } from '@nestjs/mapped-types';
import { CreateConsommationDto } from './create-consommation.dto';
import { Prisma } from '@prisma/client';

export class UpdateConsommationDto extends PartialType(CreateConsommationDto) {
    quantiteConsomme: number;
    Utilisateur?: Prisma.UtilisateurCreateNestedOneWithoutConsommationInput;
    dateConsommation?: string | Date;
    Stocks?: Prisma.StocksCreateNestedOneWithoutConsommationInput;
    Materiel?: Prisma.MaterielCreateNestedOneWithoutConsommationInput;
}
}
