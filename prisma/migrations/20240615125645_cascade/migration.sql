-- DropForeignKey
ALTER TABLE `Materiel` DROP FOREIGN KEY `Materiel_idSociete_fkey`;

-- AddForeignKey
ALTER TABLE `Materiel` ADD CONSTRAINT `Materiel_idSociete_fkey` FOREIGN KEY (`idSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE CASCADE ON UPDATE CASCADE;
