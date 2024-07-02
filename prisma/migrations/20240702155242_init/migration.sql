/*
  Warnings:

  - Added the required column `statutSpecialite` to the `Specialite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Specialite` ADD COLUMN `statutSpecialite` VARCHAR(191) NOT NULL;
