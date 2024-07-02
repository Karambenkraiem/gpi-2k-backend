/*
  Warnings:

  - You are about to drop the column `typeDisqueStockage` on the `Stocks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Stocks` DROP COLUMN `typeDisqueStockage`,
    ADD COLUMN `typeDisqueStoquage` ENUM('CD', 'DVD') NULL;
