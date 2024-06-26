/*
  Warnings:

  - The values [noir,couleur] on the enum `Stocks_couleurToner` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Stocks` MODIFY `couleurToner` ENUM('NOIR', 'COULEUR') NULL;
