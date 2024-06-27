/*
  Warnings:

  - Made the column `idSociete` on table `Alimentation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Alimentation` DROP FOREIGN KEY `Alimentation_idSociete_fkey`;

-- AlterTable
ALTER TABLE `Alimentation` MODIFY `idSociete` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE RESTRICT ON UPDATE CASCADE;
