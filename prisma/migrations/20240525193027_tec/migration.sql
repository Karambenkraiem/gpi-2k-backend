/*
  Warnings:

  - You are about to alter the column `technologieOnduleur` on the `Materiel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `Materiel` MODIFY `technologieOnduleur` ENUM('off_line', 'on_line', 'in_line') NULL;

-- AlterTable
ALTER TABLE `Utilisateur` MODIFY `etatUtilisateur` ENUM('actif', 'desactif') NOT NULL DEFAULT 'actif';
