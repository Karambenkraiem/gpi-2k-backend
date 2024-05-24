-- CreateTable
CREATE TABLE `Societe` (
    `idSociete` INTEGER NOT NULL AUTO_INCREMENT,
    `raisonSociale` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `responsable` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `numtel` VARCHAR(191) NOT NULL,
    `secteurActivite` VARCHAR(191) NOT NULL,
    `typeSociete` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idSociete`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materiel` (
    `numeroSerie` VARCHAR(191) NOT NULL,
    `categorie` ENUM('Ordinateur', 'Ecran', 'PcPortable', 'Imprimante', 'Scanner', 'Onduleur', 'VideoProjecteur', 'Serveur') NOT NULL,
    `marque` VARCHAR(191) NOT NULL,
    `modele` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,
    `garantie` VARCHAR(191) NOT NULL,
    `etat` VARCHAR(191) NOT NULL,
    `processeurPC` VARCHAR(191) NULL,
    `memoireCache` VARCHAR(191) NULL,
    `ram` VARCHAR(191) NULL,
    `disque` VARCHAR(191) NULL,
    `carteGraphique` VARCHAR(191) NULL,
    `nombreDisque` VARCHAR(191) NULL,
    `tailleEcran` DOUBLE NULL,
    `EtatBatteriePcPortable` VARCHAR(191) NULL,
    `vitesseImpression` VARCHAR(191) NULL,
    `connexionWLU` VARCHAR(191) NULL,
    `technologieImpression` VARCHAR(191) NULL,
    `fonctionSupplementaireScanImp` VARCHAR(191) NULL,
    `vitesseScan` VARCHAR(191) NULL,
    `typeScan` VARCHAR(191) NULL,
    `resolutionScanImpVideoP` VARCHAR(191) NULL,
    `formatImpScan` VARCHAR(191) NULL,
    `poidsOnduleur` VARCHAR(191) NULL,
    `autonomieOnduleur` VARCHAR(191) NULL,
    `technologieOnduleur` VARCHAR(191) NULL,
    `capaciteChargeOnduleur` VARCHAR(191) NULL,
    `entreeHDMI` BOOLEAN NULL,
    `entreeVGA` BOOLEAN NULL,
    `entreeUSB` BOOLEAN NULL,
    `entreeLAN` BOOLEAN NULL,
    `idSociete` INTEGER NOT NULL,

    PRIMARY KEY (`numeroSerie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departement` (
    `idDepartement` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idDepartement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Specialite` (
    `idSpecialite` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `departementIdDepartement` VARCHAR(191) NULL,

    PRIMARY KEY (`idSpecialite`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Utilisateur` (
    `idUtilisateur` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastLogin` DATETIME(3) NULL,
    `role` VARCHAR(191) NOT NULL,
    `etat` VARCHAR(191) NOT NULL,
    `telFix` VARCHAR(191) NULL,
    `telMobile` VARCHAR(191) NULL,
    `specialiteIdSpecialite` VARCHAR(191) NULL,

    PRIMARY KEY (`idUtilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Affectation` (
    `idUtilisateur` INTEGER NOT NULL,
    `numeroSerie` VARCHAR(191) NOT NULL,
    `dateAttribution` DATETIME(3) NOT NULL,
    `dateRetour` DATETIME(3) NULL,
    `motifRetour` VARCHAR(191) NULL,

    PRIMARY KEY (`idUtilisateur`, `numeroSerie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprunt` (
    `idUtilisateur` INTEGER NOT NULL,
    `numeroSerie` VARCHAR(191) NOT NULL,
    `dateEmprunt` DATETIME(3) NOT NULL,
    `dateRestitution` DATETIME(3) NULL,
    `refProjet` VARCHAR(191) NOT NULL,
    `etatMatRestitution` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idUtilisateur`, `numeroSerie`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Materiel` ADD CONSTRAINT `Materiel_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Specialite` ADD CONSTRAINT `Specialite_departementIdDepartement_fkey` FOREIGN KEY (`departementIdDepartement`) REFERENCES `Departement`(`idDepartement`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_specialiteIdSpecialite_fkey` FOREIGN KEY (`specialiteIdSpecialite`) REFERENCES `Specialite`(`idSpecialite`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Affectation` ADD CONSTRAINT `Affectation_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Affectation` ADD CONSTRAINT `Affectation_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE RESTRICT ON UPDATE CASCADE;
