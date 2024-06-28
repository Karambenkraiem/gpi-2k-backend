import { Prisma, PrismaClient } from "@prisma/client";

export class CreateConsommationDto implements Prisma.ConsommationCreateInput {
    quantiteConsomme: number;
    Utilisateur?: Prisma.UtilisateurCreateNestedOneWithoutConsommationInput;
    dateConsommation?: string | Date;
    Stocks?: Prisma.StocksCreateNestedOneWithoutConsommationInput;
    Materiel?: Prisma.MaterielCreateNestedOneWithoutConsommationInput;
}
