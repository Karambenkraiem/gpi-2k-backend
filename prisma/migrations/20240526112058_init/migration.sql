/*
  Warnings:

  - You are about to drop the column `entreeHDMI` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `entreeLAN` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `entreeUSB` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `entreeVGA` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `formatImpScan` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `departementId` on the `Specialite` table. All the data in the column will be lost.
  - You are about to drop the column `specialiteId` on the `Utilisateur` table. All the data in the column will be lost.
  - You are about to alter the column `roleUtilisateur` on the `Utilisateur` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(4))` to `Enum(EnumId(8))`.

*/
-- DropForeignKey
ALTER TABLE `Specialite` DROP FOREIGN KEY `Specialite_departementId_fkey`;

-- DropForeignKey
ALTER TABLE `Utilisateur` DROP FOREIGN KEY `Utilisateur_specialiteId_fkey`;

-- AlterTable
ALTER TABLE `Materiel` DROP COLUMN `entreeHDMI`,
    DROP COLUMN `entreeLAN`,
    DROP COLUMN `entreeUSB`,
    DROP COLUMN `entreeVGA`,
    DROP COLUMN `formatImpScan`,
    ADD COLUMN `dateAcquisition` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `debitSwitch` INTEGER NULL,
    ADD COLUMN `entreeHDMI_VideoProjecteur` BOOLEAN NULL,
    ADD COLUMN `entreeLAN_VideoProjecteur` BOOLEAN NULL,
    ADD COLUMN `entreeUSB_VideoProjecteur` BOOLEAN NULL,
    ADD COLUMN `entreeVGA_VideoProjecteur` BOOLEAN NULL,
    ADD COLUMN `formatScanImp` VARCHAR(191) NULL,
    ADD COLUMN `nombrePortSwitch` INTEGER NULL,
    ADD COLUMN `technologieSwith` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Specialite` DROP COLUMN `departementId`,
    ADD COLUMN `idDepartement` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Utilisateur` DROP COLUMN `specialiteId`,
    ADD COLUMN `idSpecialite` VARCHAR(191) NULL,
    MODIFY `roleUtilisateur` ENUM('DIRECTEUR', 'ADMINISTRATEUR', 'TECHNICIEN', 'EMPLOYE', 'RMQ') NOT NULL DEFAULT 'EMPLOYE';

-- AddForeignKey
ALTER TABLE `Specialite` ADD CONSTRAINT `Specialite_idDepartement_fkey` FOREIGN KEY (`idDepartement`) REFERENCES `Departement`(`idDepartement`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_idSpecialite_fkey` FOREIGN KEY (`idSpecialite`) REFERENCES `Specialite`(`idSpecialite`) ON DELETE SET NULL ON UPDATE CASCADE;
