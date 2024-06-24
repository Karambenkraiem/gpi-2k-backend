/*
  Warnings:

  - The primary key for the `Alimentation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `societeIdSociete` on the `Alimentation` table. All the data in the column will be lost.
  - Added the required column `idSociete` to the `Alimentation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Alimentation` DROP FOREIGN KEY `Alimentation_societeIdSociete_fkey`;

-- AlterTable
ALTER TABLE `Alimentation` DROP PRIMARY KEY,
    DROP COLUMN `societeIdSociete`,
    ADD COLUMN `idSociete` INTEGER NOT NULL,
    ADD PRIMARY KEY (`idSociete`, `refArt`);

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE RESTRICT ON UPDATE CASCADE;
