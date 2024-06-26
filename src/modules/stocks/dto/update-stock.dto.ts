import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDto } from './create-stock.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateStockDto extends PartialType(CreateStockDto) {
    refArt: string;
    marque: string;
    modele: string;
    prix: number;
    quantiteStock: number;
    Alimentation?: Prisma.AlimentationCreateNestedManyWithoutStocksInput;
    IntefaceCarteGraphique?: string;
    TypeHDD?: $Enums.TypeHDD;
    autre?: string;
    capaciteFlashDvdCdRamHDD?: number;
    capaciteToner?: number;
    categorie?: $Enums.CategorieAccessoire;
    compatibiliteToner?: string;
    couleurToner?: $Enums.Couleur;
    dispositionToucheClavier?: $Enums.Disposition;
    frequenceCarteGraphiqueRam?: number;
    interFaceHDD?: $Enums.InterfaceHDD;
    memoireCarteGraphiqueRam?: number;
    nombreBouttonSouris?: number;
    tailleHDD?: $Enums.TailleDisque;
    typeConnexionClavierSouris?: $Enums.TypeConnexion;
    typeDisqueStoquage?: $Enums.TypeDisque;
    typeRam?: string;
    vitesseHDD?: number;
    
}

