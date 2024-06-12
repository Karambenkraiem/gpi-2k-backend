/*
  Warnings:

  - The values [desactif] on the enum `Utilisateur_etatUtilisateur` will be removed. If these variants are still used in the database, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Utilisateur` DROP FOREIGN KEY `Utilisateur_idSpecialite_fkey`;

-- AlterTable
ALTER TABLE `Utilisateur` MODIFY `etatUtilisateur` ENUM('actif', 'inactif', 'suspendu') NOT NULL DEFAULT 'actif';

-- AddForeignKey
ALTER TABLE `Utilisateur` ADD CONSTRAINT `Utilisateur_idSpecialite_fkey` FOREIGN KEY (`idSpecialite`) REFERENCES `Specialite`(`idSpecialite`) ON DELETE CASCADE ON UPDATE CASCADE;
