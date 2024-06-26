-- AlterTable
ALTER TABLE `Stocks` ADD COLUMN `categorie` ENUM('Toner', 'DisqueStoquage', 'Clavier', 'Souris', 'FlashDisque', 'CarteGraphique', 'Ram', 'DisqueDur', 'CartoucheEncre', 'Autres') NOT NULL DEFAULT 'Autres';
