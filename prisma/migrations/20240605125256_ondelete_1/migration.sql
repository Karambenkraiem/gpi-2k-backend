-- DropForeignKey
ALTER TABLE `Affectation` DROP FOREIGN KEY `Affectation_idUtilisateur_fkey`;

-- DropForeignKey
ALTER TABLE `Emprunt` DROP FOREIGN KEY `Emprunt_idUtilisateur_fkey`;

-- AlterTable
ALTER TABLE `Utilisateur` MODIFY `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Affectation` ADD CONSTRAINT `Affectation_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_idUtilisateur_fkey` FOREIGN KEY (`idUtilisateur`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;
