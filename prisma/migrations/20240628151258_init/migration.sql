/*
  Warnings:

  - Added the required column `numeroLicence` to the `Licence` table without a default value. This is not possible if the table is not empty.
  - Made the column `idLogiciel` on table `Licence` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Licence` DROP FOREIGN KEY `Licence_idLogiciel_fkey`;

-- AlterTable
ALTER TABLE `Installation` ADD COLUMN `dateDesinstallation` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Licence` ADD COLUMN `numeroLicence` VARCHAR(191) NOT NULL,
    MODIFY `dateActivation` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `dateExpiration` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `prixLicence` DOUBLE NULL,
    MODIFY `idLogiciel` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Licence` ADD CONSTRAINT `Licence_idLogiciel_fkey` FOREIGN KEY (`idLogiciel`) REFERENCES `Logiciel`(`idLogiciel`) ON DELETE RESTRICT ON UPDATE CASCADE;
