/*
  Warnings:

  - You are about to drop the column `technologieSwith` on the `Materiel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Materiel` DROP COLUMN `technologieSwith`,
    ADD COLUMN `technologieSwitch` VARCHAR(191) NULL;
