import { $Enums, Prisma } from "@prisma/client";

export class CreateStockDto implements Prisma.StocksCreateInput{
    refArt: string;
    categorie: $Enums.CategorieAccessoire;
    marque: string;
    modele: string;
    prix: number;
    quantiteStock: number;
    capaciteToner?: number;
    compatibiliteToner?: string;
    couleurToner?: $Enums.Couleur;
    capaciteFlashDvdCdRamHDD?: number;
    typeDisqueStockage?: $Enums.TypeDisque;
    typeConnexionClavierSouris?: $Enums.TypeConnexion;
    dispositionToucheClavier?: $Enums.Disposition;
    nombreBouttonSouris?: number;
    memoireCarteGraphiqueRam?: number;
    IntefaceCarteGraphique?: string;
    frequenceCarteGraphiqueRam?: number;
    typeRam?: string;
    interFaceHDD?: $Enums.InterfaceHDD;
    vitesseHDD?: number;
    tailleHDD?: string;
    TypeHDD?: $Enums.TypeHDD;
    autre?: string;
    Alimentation?: Prisma.AlimentationCreateNestedManyWithoutStocksInput;
    Consommation?: Prisma.ConsommationCreateNestedManyWithoutStocksInput;

}
