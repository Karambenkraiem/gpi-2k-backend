/*
  Warnings:

  - You are about to alter the column `refProjet` on the `Emprunt` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(7))`.
  - You are about to drop the column `EtatBatteriePcPortable` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `etat` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `technologie` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `typeScan` on the `Materiel` table. All the data in the column will be lost.
  - You are about to drop the column `vitesseScan` on the `Materiel` table. All the data in the column will be lost.
  - You are about to alter the column `connexionWLU` on the `Materiel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to drop the column `etat` on the `Utilisateur` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Utilisateur` table. All the data in the column will be lost.
  - Added the required column `etatMateriel` to the `Materiel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Emprunt` MODIFY `refProjet` ENUM('TERA', 'TERG', 'TERX', 'TERY') NOT NULL;

-- AlterTable
ALTER TABLE `Materiel` DROP COLUMN `EtatBatteriePcPortable`,
    DROP COLUMN `etat`,
    DROP COLUMN `technologie`,
    DROP COLUMN `typeScan`,
    DROP COLUMN `vitesseScan`,
    ADD COLUMN `etatBatteriePcPortable` VARCHAR(191) NULL,
    ADD COLUMN `etatMateriel` ENUM('fonctionnel', 'enPanne', 'rebut') NOT NULL,
    ADD COLUMN `technologieImpression` ENUM('inkTank', 'ecoTank', 'Laser', 'JetEncre') NULL,
    ADD COLUMN `technologieOnduleur` VARCHAR(191) NULL,
    ADD COLUMN `typeScanner` ENUM('Aplat', 'ChargeAutomatique') NULL,
    ADD COLUMN `vitesseScanner` VARCHAR(191) NULL,
    MODIFY `connexionWLU` ENUM('WIFI', 'LAN', 'USB') NULL;

-- AlterTable
ALTER TABLE `Utilisateur` DROP COLUMN `etat`,
    DROP COLUMN `role`,
    ADD COLUMN `etatUtilisateur` ENUM('actif', 'desactif') NOT NULL DEFAULT 'desactif',
    ADD COLUMN `roleUtilisateur` ENUM('employe', 'Technicien', 'Administrateur', 'Directeur', 'RMQ') NOT NULL DEFAULT 'employe';
