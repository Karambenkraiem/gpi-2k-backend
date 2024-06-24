/*
  Warnings:

  - Made the column `refProjet` on table `Emprunt` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Emprunt` MODIFY `refProjet` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Stocks` ADD COLUMN `IntefaceCarteGraphique` VARCHAR(191) NULL,
    ADD COLUMN `TypeHDD` ENUM('HDD', 'SSD', 'SSHD') NULL,
    ADD COLUMN `capaciteFlashDvdCdRamHDD` INTEGER NULL,
    ADD COLUMN `capaciteToner` INTEGER NULL,
    ADD COLUMN `compatibiliteToner` VARCHAR(191) NULL,
    ADD COLUMN `couleurToner` ENUM('noir', 'couleur') NULL,
    ADD COLUMN `dateExpirationToner` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `dispositionToucheClavier` ENUM('AZERTY', 'QWERTY') NULL,
    ADD COLUMN `frequenceCarteGraphiqueRam` INTEGER NULL,
    ADD COLUMN `interFaceHDD` ENUM('SATA', 'USB', 'PCIe', 'IDE') NULL,
    ADD COLUMN `memoireCarteGraphiqueRam` INTEGER NULL,
    ADD COLUMN `nombreBouttonSouris` INTEGER NULL,
    ADD COLUMN `tailleHDD` ENUM('2.5', '3.5', 'M2') NULL,
    ADD COLUMN `typeConnexionClavierSouris` ENUM('USB', 'WIFI', 'BLUETOOTH') NULL,
    ADD COLUMN `typeDisqueStoquage` ENUM('CD', 'DVD') NULL,
    ADD COLUMN `typeRam` VARCHAR(191) NULL,
    ADD COLUMN `vitesseHDD` INTEGER NULL;
