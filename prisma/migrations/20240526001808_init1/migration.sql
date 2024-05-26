/*
  Warnings:

  - You are about to alter the column `categorie` on the `Materiel` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Affectation` MODIFY `dateAttribution` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Emprunt` MODIFY `dateEmprunt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `refProjet` ENUM('TERA', 'TERG', 'TERX', 'TERY', 'TEPA', 'TEPG', 'TEPX', 'TEPY') NOT NULL DEFAULT 'TERG';

-- AlterTable
ALTER TABLE `Materiel` MODIFY `categorie` ENUM('UniteCentrale', 'Ecran', 'PcPortable', 'Imprimante', 'Scanner', 'Onduleur', 'VideoProjecteur', 'Serveur', 'Switch') NOT NULL DEFAULT 'UniteCentrale',
    MODIFY `etatMateriel` ENUM('nouveau', 'fonctionnel', 'enPanne', 'rebut') NOT NULL DEFAULT 'nouveau';
