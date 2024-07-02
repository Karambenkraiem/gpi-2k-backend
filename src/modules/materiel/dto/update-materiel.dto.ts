import { PartialType } from '@nestjs/mapped-types';
import { CreateMaterielDto } from './create-materiel.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateMaterielDto extends PartialType(CreateMaterielDto) {
  disponibilite: string;
  numeroSerie: string;
  categorie?: $Enums.Categorie;
  marque: string;
  modele: string;
  prix: number;
  garantie: string;
  etatMateriel?: $Enums.EtatMateriel;
  dateAcquisition?: string | Date;
  nombrePortSwitch?: number;
  debitSwitch?: number;
  technologieSwitch?: string;
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
  formatScanImp?: string;
  poidsOnduleur?: string;
  autonomieOnduleur?: string;
  capaciteChargeOnduleur?: string;
  entreeHDMI_VideoProjecteur?: boolean;
  entreeVGA_VideoProjecteur?: boolean;
  entreeUSB_VideoProjecteur?: boolean;
  entreeLAN_VideoProjecteur?: boolean;
  Affectation?: Prisma.AffectationCreateNestedManyWithoutMaterielInput;
  Emprunt?: Prisma.EmpruntCreateNestedManyWithoutMaterielInput;
  Societe?: Prisma.SocieteCreateNestedOneWithoutMaterielInput;
  Installation?: Prisma.InstallationCreateNestedManyWithoutMaterielInput;
  
}
