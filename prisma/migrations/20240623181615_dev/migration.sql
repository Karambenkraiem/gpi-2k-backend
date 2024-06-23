/*
  Warnings:

  - You are about to alter the column `refProjet` on the `Emprunt` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Emprunt` MODIFY `refProjet` VARCHAR(191) NULL;
