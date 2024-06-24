/*
  Warnings:

  - You are about to drop the column `quantite` on the `Stocks` table. All the data in the column will be lost.
  - Added the required column `quantiteAlimente` to the `Alimentation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantiteStock` to the `Stocks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Alimentation` ADD COLUMN `quantiteAlimente` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Stocks` DROP COLUMN `quantite`,
    ADD COLUMN `quantiteStock` INTEGER NOT NULL;
