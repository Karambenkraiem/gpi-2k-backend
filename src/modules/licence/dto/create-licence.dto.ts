import { Prisma } from "@prisma/client";

export class CreateLicenceDto implements Prisma.LicenceCreateInput {
    dateActivation?: string | Date;
    dateExpiration?: string | Date;
    prixLicence: number;
    Installation?: Prisma.InstallationCreateNestedManyWithoutLicenceInput;
    Logiciel?: Prisma.LogicielCreateNestedOneWithoutLicenceInput;
}
