import { $Enums, Prisma } from "@prisma/client";

export class CreateMaterielDto implements Prisma.MaterielCreateInput{
    numeroSerie: string;
    categorie: $Enums.Categorie;
    marque: string;
    modele: string;
    prix: number;
    garantie: string;
    etatMateriel: $Enums.EtatMateriel;
    processeurPC?: string;
    memoireCache?: string;
    ram?: string;
    disque?: string;
    carteGraphique?: string;
    nombreDisque?: string;
    tailleEcran?: number;
    etatBatteriePcPortable?: string;
    vitesseImpression?: string;
    connexionWLU?: $Enums.ConnexionWLU;
    technologieOnduleur?: $Enums.TechnologieOnduleur;
    fonctionSupplementaireScanImp?: string;
    vitesseScanner?: string;
    typeScanner?: $Enums.TypeScanner;
    resolutionScanImpVideoP?: string;
    technologieImpression?: $Enums.TechnologieImpression;
    formatImpScan?: string;
    poidsOnduleur?: string;
    autonomieOnduleur?: string;
    capaciteChargeOnduleur?: string;
    entreeHDMI?: boolean;
    entreeVGA?: boolean;
    entreeUSB?: boolean;
    entreeLAN?: boolean;
    societe: Prisma.SocieteCreateNestedOneWithoutMaterielInput;
    Affectation?: Prisma.AffectationCreateNestedManyWithoutMaterielInput;
    Emprunt?: Prisma.EmpruntCreateNestedManyWithoutMaterielInput;
    
}
