-- CreateTable
CREATE TABLE `Contrat` (
    `idContrat` INTEGER NOT NULL AUTO_INCREMENT,
    `dateDebutContrat` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateFinContrat` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `montantContrat` DOUBLE NOT NULL,
    `descriptionContrat` VARCHAR(191) NOT NULL,
    `contratRenouvable` BOOLEAN NOT NULL,
    `typeContrat` ENUM('Achat', 'Service', 'Achat_Service') NOT NULL,
    `etatContrat` ENUM('actif', 'inactif', 'suspendu') NOT NULL,

    PRIMARY KEY (`idContrat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
