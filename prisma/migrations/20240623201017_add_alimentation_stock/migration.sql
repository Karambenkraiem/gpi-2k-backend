-- CreateTable
CREATE TABLE `Alimentation` (
    `societeIdSociete` INTEGER NOT NULL,
    `refArt` VARCHAR(191) NOT NULL,
    `dateAlimentation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`societeIdSociete`, `refArt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stocks` (
    `refArt` VARCHAR(191) NOT NULL,
    `marque` VARCHAR(191) NOT NULL,
    `modele` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,
    `quantite` INTEGER NOT NULL,

    PRIMARY KEY (`refArt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_societeIdSociete_fkey` FOREIGN KEY (`societeIdSociete`) REFERENCES `Societe`(`idSociete`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alimentation` ADD CONSTRAINT `Alimentation_refArt_fkey` FOREIGN KEY (`refArt`) REFERENCES `Stocks`(`refArt`) ON DELETE RESTRICT ON UPDATE CASCADE;
