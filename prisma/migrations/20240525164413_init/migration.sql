/*
  Warnings:

  - You are about to drop the column `technologieImpression` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `technologieOnduleur` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `departementIdDepartement` on the `Specialite` table. All the data in the column will be lost.
  - You are about to drop the column `specialiteIdSpecialite` on the `Utilisateur` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Specialite` DROP FOREIGN KEY `Specialite_departementIdDepartement_fkey`;

-- DropForeignKey
ALTER TABLE `Utilisateur` DROP FOREIGN KEY `Utilisateur_specialiteIdSpecialite_fkey`;

-- AlterTable
ALTER TABLE `Materiel` DROP COLUMN `technologieImpression`,
    DROP COLUMN `technologieOnduleur`,
    ADD COLUMN `technologie` VARCHAR(191) NULL,
    MODIFY `categorie` ENUM('Ordinateur', 'Ecran', 'PcPortable', 'Imprimante', 'Scanner', 'Onduleur', 'VideoProjecteur', 'Serveur', 'Switch') NOT NULL;

-- AlterTable
ALTER TABLE `Specialite` DROP COLUMN `departementIdDepartement`,
    ADD COLUMN `departementId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Utilisateur` DROP COLUMN `specialiteIdSpecialite`,
    ADD COLUMN `specialiteId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Specialite` ADD CONSTRAINT `Specialite_departementId_fkey` FOREIGN KEY (`departementId`) REFERENCES `Departement`(`idDepartement`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_specialiteId_fkey` FOREIGN KEY (`specialiteId`) REFERENCES `Specialite`(`idSpecialite`) ON DELETE SET NULL ON UPDATE CASCADE;
