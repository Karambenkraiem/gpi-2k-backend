-- DropForeignKey
ALTER TABLE `Affectation` DROP FOREIGN KEY `Affectation_numeroSerie_fkey`;

-- DropForeignKey
ALTER TABLE `Emprunt` DROP FOREIGN KEY `Emprunt_numeroSerie_fkey`;

-- DropForeignKey
ALTER TABLE `Specialite` DROP FOREIGN KEY `Specialite_idDepartement_fkey`;

-- AlterTable
ALTER TABLE `Affectation` ADD COLUMN `etatAffectation` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Emprunt` ADD COLUMN `etatEmprunt` VARCHAR(191) NULL,
    MODIFY `refProjet` ENUM('TERA', 'TERG', 'TERX', 'TERY', 'TEPA', 'TEPG', 'TEPX', 'TEPY') NULL DEFAULT 'TERG',
    MODIFY `etatMatRestitution` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Affectation` ADD CONSTRAINT `Affectation_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprunt` ADD CONSTRAINT `Emprunt_numeroSerie_fkey` FOREIGN KEY (`numeroSerie`) REFERENCES `Materiel`(`numeroSerie`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Specialite` ADD CONSTRAINT `Specialite_idDepartement_fkey` FOREIGN KEY (`idDepartement`) REFERENCES `Departement`(`idDepartement`) ON DELETE CASCADE ON UPDATE CASCADE;
