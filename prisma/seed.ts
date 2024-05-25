import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function seed() {
    await prisma.societe.create({
        data: {
            raisonSociale: "123",
            adresse: "string",
            responsable: "string",
            email: "string",
            numtel: "string",
            secteurActivite: "string",
            typeSociete: "string",
        }
    })
    await prisma.utilisateur.create({
        data: {
            idUtilisateur: 12,
            password: "string",
            fullName: "string",
            email: "string",
            createdAt: new Date(),
            lastLogin: new Date(),
            roleUtilisateur: "Administrateur",
            etatUtilisateur: "actif",
            telFix: "string",
            telMobile: "string",
        }
    })
    await prisma.materiel.create({
        data: {
            numeroSerie: "string1",
            categorie: "Ecran",
            marque: "string",
            modele: "string",
            prix: 1111,
            garantie: "string",
            etatMateriel: "fonctionnel",
            processeurPC: "string",
            memoireCache: "string",
            ram: "string",
            disque: "string",
            carteGraphique: "string",
            nombreDisque: "string",
            tailleEcran: 1111,
            etatBatteriePcPortable: "string",
            vitesseImpression: "string",
            connexionWLU: "LAN",
            technologieOnduleur: "on_line",
            fonctionSupplementaireScanImp: "string",
            vitesseScanner: "string",
            typeScanner: "Aplat",
            resolutionScanImpVideoP: "string",
            technologieImpression: "JetEncre",
            formatImpScan: "string",
            poidsOnduleur: "string",
            autonomieOnduleur: "string",
            capaciteChargeOnduleur: "string",
            entreeHDMI: true,
            entreeVGA: true,
            entreeUSB: true,
            entreeLAN: true,
            idSociete: 1,

        }
    })

    await prisma.departement.create({
        data: {
            idDepartement: "string",
            nom: "string",
        }
    })





}
seed()