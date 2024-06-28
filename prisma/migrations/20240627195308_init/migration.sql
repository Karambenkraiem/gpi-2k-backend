/*
  Warnings:

  - You are about to drop the column `libele` on the `Logiciel` table. All the data in the column will be lost.
  - Added the required column `libelle` to the `Logiciel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Alimentation` DROP FOREIGN KEY `Alimentation_idSociete_fkey`;

-- DropForeignKey
ALTER TABLE `Alimentation` DROP FOREIGN KEY `Alimentation_refArt_fkey`;

-- AlterTable
ALTER TABLE `Alimentation` MODIFY `idSociete` INTEGER NULL,
    MODIFY `refArt` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Logiciel` DROP COLUMN `libele`,
    ADD COLUMN `libelle` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_refArt_fkey` FOREIGN KEY (`refArt`) REFERENCES `Stocks`(`refArt`) ON DELETE SET NULL ON UPDATE CASCADE;
