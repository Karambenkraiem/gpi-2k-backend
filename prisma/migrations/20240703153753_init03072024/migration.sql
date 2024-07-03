-- CreateTable
CREATE TABLE `Contrat` (
    `idContrat` INTEGER NOT NULL AUTO_INCREMENT,
    `dateDebutContrat` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateFinContrat` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `montantContrat` DOUBLE NULL,
    `descriptionContrat` VARCHAR(191) NULL,
    `contratRenouvable` BOOLEAN NULL,
    `typeContrat` VARCHAR(191) NULL,
    `etatContrat` VARCHAR(191) NULL,

    PRIMARY KEY (`idContrat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Signature` (
    `idSignature` INTEGER NOT NULL AUTO_INCREMENT,
    `idSociete` INTEGER NULL,
    `idContrat` INTEGER NULL,
    `dateSignature` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idSignature`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stocks` (
    `refArt` VARCHAR(191) NOT NULL,
    `marque` VARCHAR(191) NOT NULL,
    `modele` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,
    `quantiteStock` INTEGER NOT NULL,
    `capaciteToner` INTEGER NULL,
    `compatibiliteToner` VARCHAR(191) NULL,
    `capaciteFlashDvdCdRamHDD` INTEGER NULL,
    `typeConnexionClavierSouris` ENUM('USB', 'WIFI', 'BLUETOOTH') NULL,
    `dispositionToucheClavier` ENUM('AZERTY', 'QWERTY') NULL,
    `nombreBouttonSouris` INTEGER NULL,
    `memoireCarteGraphiqueRam` INTEGER NULL,
    `IntefaceCarteGraphique` VARCHAR(191) NULL,
    `frequenceCarteGraphiqueRam` INTEGER NULL,
    `typeRam` VARCHAR(191) NULL,
    `vitesseHDD` INTEGER NULL,
    `autre` VARCHAR(191) NULL,
    `categorie` ENUM('Toner', 'DisqueStockage', 'DisqueDurExterne', 'DisqueDurInterne', 'Clavier', 'Souris', 'FlashDisque', 'CarteGraphique', 'Ram', 'CartoucheEncre', 'Autres') NOT NULL,
    `couleurToner` ENUM('NOIR', 'COULEUR', 'MAGENTA', 'JAUNE', 'BLEU') NULL,
    `typeDisqueStockage` ENUM('CD', 'DVD') NULL,
    `interFaceHDD` ENUM('SATA', 'USB', 'PCIe', 'IDE') NULL,
    `tailleHDD` VARCHAR(191) NULL,
    `TypeHDD` ENUM('HDD', 'SSD', 'SSHD') NULL,

    PRIMARY KEY (`refArt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alimentation` (
    `idAlimentation` INTEGER NOT NULL AUTO_INCREMENT,
    `idSociete` INTEGER NULL,
    `refArt` VARCHAR(191) NULL,
    `dateAlimentation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `quantiteAlimente` INTEGER NOT NULL,

    PRIMARY KEY (`idAlimentation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Societe` (
    `idSociete` INTEGER NOT NULL AUTO_INCREMENT,
    `raisonSociale` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `responsable` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `numtel` VARCHAR(191) NOT NULL,
    `secteurActivite` VARCHAR(191) NOT NULL,
    `typeSociete` ENUM('FOURNISSEUR', 'PRESTATAIRE', 'FOURNISSEUR_PRESTATAIRE') NOT NULL DEFAULT 'FOURNISSEUR',

    PRIMARY KEY (`idSociete`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Licence` (
    `idLicence` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroLicence` VARCHAR(191) NOT NULL,
    `dateActivation` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateExpiration` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `prixLicence` DOUBLE NULL,
    `statutLicence` VARCHAR(191) NULL,
    `idLogiciel` INTEGER NULL,

    PRIMARY KEY (`idLicence`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Logiciel` (
    `idLogiciel` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,
    `version` VARCHAR(191) NOT NULL,
    `editeur` VARCHAR(191) NOT NULL,
    `dateAcquisition` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `typeLogiciel` ENUM('Bureautique', 'Technique') NOT NULL,
    `idSociete` INTEGER NULL,

    PRIMARY KEY (`idLogiciel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Installation` (
    `idInstallation` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroSerie` VARCHAR(191) NULL,
    `idLicence` INTEGER NULL,
    `dateInstallation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateDesinstallation` DATETIME(3) NULL,
    `etatOperation` VARCHAR(191) NULL,

    PRIMARY KEY (`idInstallation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Affectation` (
    `idAffectation` INTEGER NOT NULL AUTO_INCREMENT,
    `idUtilisateur` INTEGER NULL,
    `numeroSerie` VARCHAR(191) NULL,
    `dateAttribution` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateRetour` DATETIME(3) NULL,
    `motifRetour` VARCHAR(191) NULL,

    PRIMARY KEY (`idAffectation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprunt` (
    `idEmprunt` INTEGER NOT NULL AUTO_INCREMENT,
    `idUtilisateur` INTEGER NULL,
    `numeroSerie` VARCHAR(191) NULL,
    `dateEmprunt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateRestitution` DATETIME(3) NULL,
    `refProjet` VARCHAR(191) NOT NULL,
    `etatMatRestitution` VARCHAR(191) NULL,

    PRIMARY KEY (`idEmprunt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departement` (
    `idDepartement` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `statutDepartement` VARCHAR(191) NOT NULL DEFAULT 'Actif',

    PRIMARY KEY (`idDepartement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materiel` (
    `numeroSerie` VARCHAR(191) NOT NULL,
    `categorie` ENUM('UniteCentrale', 'Ecran', 'PcPortable', 'Imprimante', 'Scanner', 'Onduleur', 'VideoProjecteur', 'Serveur', 'Switch') NOT NULL DEFAULT 'UniteCentrale',
    `marque` VARCHAR(191) NOT NULL,
    `modele` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,
    `garantie` VARCHAR(191) NOT NULL,
    `etatMateriel` ENUM('nouveau', 'fonctionnel', 'enPanne', 'rebut') NOT NULL DEFAULT 'nouveau',
    `dateAcquisition` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `idSociete` INTEGER NOT NULL,
    `disponibilite` VARCHAR(191) NOT NULL DEFAULT 'Disponible',
    `nombrePortSwitch` INTEGER NULL,
    `debitSwitch` INTEGER NULL,
    `technologieSwitch` VARCHAR(191) NULL,
    `processeurPC` VARCHAR(191) NULL,
    `memoireCache` VARCHAR(191) NULL,
    `ram` VARCHAR(191) NULL,
    `disque` VARCHAR(191) NULL,
    `carteGraphique` VARCHAR(191) NULL,
    `nombreDisque` VARCHAR(191) NULL,
    `tailleEcran` DOUBLE NULL,
    `etatBatteriePcPortable` VARCHAR(191) NULL,
    `vitesseImpression` VARCHAR(191) NULL,
    `connexionWLU` ENUM('WIFI', 'LAN', 'USB') NULL,
    `technologieOnduleur` ENUM('off_line', 'on_line', 'in_line') NULL,
    `fonctionSupplementaireScanImp` VARCHAR(191) NULL,
    `vitesseScanner` VARCHAR(191) NULL,
    `typeScanner` ENUM('Aplat', 'ChargeAutomatique') NULL,
    `resolutionScanImpVideoP` VARCHAR(191) NULL,
    `technologieImpression` ENUM('inkTank', 'ecoTank', 'Laser', 'JetEncre') NULL,
    `formatScanImp` VARCHAR(191) NULL,
    `poidsOnduleur` VARCHAR(191) NULL,
    `autonomieOnduleur` VARCHAR(191) NULL,
    `capaciteChargeOnduleur` VARCHAR(191) NULL,
    `entreeHDMI_VideoProjecteur` BOOLEAN NULL,
    `entreeVGA_VideoProjecteur` BOOLEAN NULL,
    `entreeUSB_VideoProjecteur` BOOLEAN NULL,
    `entreeLAN_VideoProjecteur` BOOLEAN NULL,

    PRIMARY KEY (`numeroSerie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Specialite` (
    `idSpecialite` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `statutSpecialite` VARCHAR(191) NOT NULL DEFAULT 'Actif',
    `idDepartement` VARCHAR(191) NULL,

    PRIMARY KEY (`idSpecialite`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Utilisateur` (
    `idUtilisateur` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastLogin` DATETIME(3) NULL,
    `roleUtilisateur` ENUM('DIRECTEUR', 'ADMINISTRATEUR', 'TECHNICIEN', 'EMPLOYE', 'RMQ') NOT NULL DEFAULT 'EMPLOYE',
    `etatUtilisateur` ENUM('actif', 'inactif', 'suspendu') NOT NULL DEFAULT 'actif',
    `telFix` VARCHAR(191) NULL,
    `telMobile` VARCHAR(191) NULL,
    `idSpecialite` VARCHAR(191) NULL,

    PRIMARY KEY (`idUtilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Incident` (
    `idIncident` INTEGER NOT NULL AUTO_INCREMENT,
    `demandeurId` INTEGER NULL,
    `intervenantId` INTEGER NULL,
    `materielNumeroSerie` VARCHAR(191) NULL,
    `logicielIdLogiciel` INTEGER NULL,
    `priorite` VARCHAR(191) NOT NULL,
    `dateCreation` DATETIME(3) NOT NULL,
    `dateCloture` DATETIME(3) NOT NULL,
    `natureIncident` VARCHAR(191) NOT NULL,
    `solutionRealisee` VARCHAR(191) NOT NULL,
    `etatReclamation` VARCHAR(191) NOT NULL,
    `emplacement` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idIncident`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Consommation` (
    `idConsommation` INTEGER NOT NULL AUTO_INCREMENT,
    `idUtilisateur` INTEGER NULL,
    `numeroSerie` VARCHAR(191) NULL,
    `refArt` VARCHAR(191) NULL,
    `dateConsommation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `quantiteConsomme` INTEGER NULL,

    PRIMARY KEY (`idConsommation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Signature` ADD CONSTRAINT `Signature_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Signature` ADD CONSTRAINT `Signature_idContrat_fkey` FOREIGN KEY (`idContrat`) REFERENCES `Contrat`(`idContrat`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_refArt_fkey` FOREIGN KEY (`refArt`) REFERENCES `Stocks`(`refArt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Licence` ADD CONSTRAINT `Licence_idLogiciel_fkey` FOREIGN KEY (`idLogiciel`) REFERENCES `Logiciel`(`idLogiciel`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Logiciel` ADD CONSTRAINT `Logiciel_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Installation` ADD CONSTRAINT `Installation_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Installation` ADD CONSTRAINT `Installation_idLicence_fkey` FOREIGN KEY (`idLicence`) REFERENCES `Licence`(`idLicence`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Affectation` ADD CONSTRAINT `Affectation_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Affectation` ADD CONSTRAINT `Affectation_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Materiel` ADD CONSTRAINT `Materiel_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Specialite` ADD CONSTRAINT `Specialite_idDepartement_fkey` FOREIGN KEY (`idDepartement`) REFERENCES `Departement`(`idDepartement`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_idSpecialite_fkey` FOREIGN KEY (`idSpecialite`) REFERENCES `Specialite`(`idSpecialite`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_demandeurId_fkey` FOREIGN KEY (`demandeurId`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_intervenantId_fkey` FOREIGN KEY (`intervenantId`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_materielNumeroSerie_fkey` FOREIGN KEY (`materielNumeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_logicielIdLogiciel_fkey` FOREIGN KEY (`logicielIdLogiciel`) REFERENCES `Logiciel`(`idLogiciel`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consommation` ADD CONSTRAINT `Consommation_refArt_fkey` FOREIGN KEY (`refArt`) REFERENCES `Stocks`(`refArt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consommation` ADD CONSTRAINT `Consommation_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consommation` ADD CONSTRAINT `Consommation_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE SET NULL ON UPDATE CASCADE;
