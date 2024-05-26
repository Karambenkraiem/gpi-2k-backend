/*
  Warnings:

  - You are about to alter the column `typeSociete` on the `Societe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Societe` MODIFY `typeSociete` ENUM('fournisseur', 'prestataireService') NOT NULL DEFAULT 'fournisseur';
