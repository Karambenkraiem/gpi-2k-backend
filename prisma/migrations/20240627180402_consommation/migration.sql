-- DropForeignKey
ALTER TABLE `Alimentation` DROP FOREIGN KEY `Alimentation_idSociete_fkey`;

-- DropForeignKey
ALTER TABLE `Alimentation` DROP FOREIGN KEY `Alimentation_refArt_fkey`;

-- AlterTable
ALTER TABLE `Alimentation` MODIFY `idSociete` INTEGER NULL,
    MODIFY `refArt` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Consommation` (
    `idConsommation` INTEGER NOT NULL AUTO_INCREMENT,
    `idUtilisateur` INTEGER NULL,
    `numeroSerie` VARCHAR(191) NULL,
    `refArt` VARCHAR(191) NULL,
    `quantiteConsomme` INTEGER NOT NULL,

    PRIMARY KEY (`idConsommation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_refArt_fkey` FOREIGN KEY (`refArt`) REFERENCES `Stocks`(`refArt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consommation` ADD CONSTRAINT `Consommation_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consommation` ADD CONSTRAINT `Consommation_refArt_fkey` FOREIGN KEY (`refArt`) REFERENCES `Stocks`(`refArt`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Consommation` ADD CONSTRAINT `Consommation_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE SET NULL ON UPDATE CASCADE;
