import { $Enums, Categorie, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function seed() {
  await prisma.societe.create({
    data: {
      raisonSociale: "5",
      adresse: "string",
      responsable: "string",
      email: "string",
      numtel: "string",
      secteurActivite: "string",
      typeSociete: "fournisseur",
    }
  })
  await prisma.departement.create({
    data: {
      idDepartement: "depdep",
      nom: "string",
    }
  })
  await prisma.specialite.create({
    data: {
      idSpecialite: "5",
      nom: "string",
      idDepartement: "depdep"

    },
  });
  await prisma.utilisateur.create({
    data: {
      idUtilisateur: 5,
      password: "string",
      fullName: "string",
      email: "string",
      createdAt: new Date(),
      lastLogin: new Date(),
      roleUtilisateur: "ADMINISTRATEUR",
      etatUtilisateur: "actif",
      telFix: "string",
      telMobile: "string",
      idSpecialite: "5"
    }
  })
  await prisma.materiel.create({
    data: {
      numeroSerie: "5",
      categorie: "Ecran",
      marque: "string",
      modele: "string",
      prix: 200,
      garantie: "string",
      etatMateriel: "fonctionnel",
      dateAcquisition: new Date(),
      nombrePortSwitch: 2,
      debitSwitch: 100,
      technologieSwith: "string",
      processeurPC: "string",
      memoireCache: "string",
      ram: "string",
      disque: "string",
      carteGraphique: "string",
      nombreDisque: "string",
      tailleEcran: 300,
      etatBatteriePcPortable: "string",
      vitesseImpression: "string",
      connexionWLU: "WIFI",
      technologieOnduleur: "in_line",
      fonctionSupplementaireScanImp: "string",
      vitesseScanner: "string",
      typeScanner: "Aplat",
      resolutionScanImpVideoP: "string",
      technologieImpression: "JetEncre",
      formatScanImp: "string",
      poidsOnduleur: "string",
      autonomieOnduleur: "string",
      capaciteChargeOnduleur: "string",
      entreeHDMI_VideoProjecteur: true,
      entreeVGA_VideoProjecteur: true,
      entreeUSB_VideoProjecteur: true,
      entreeLAN_VideoProjecteur: true,
      idSociete: 1

    }
  })


  await prisma.affectation.create({
    data: {
      idUtilisateur: 5,
      numeroSerie: "5",
      dateAttribution: new Date(),
      dateRetour: new Date(),
      motifRetour: 'stringMotif',
    },
  });
  await prisma.emprunt.create({
    data: {
      idUtilisateur: 5,
      numeroSerie: "5",
      dateEmprunt: new Date(),
      dateRestitution: new Date(),
      refProjet: 'TEPA',
      etatMatRestitution: "Bon etat",

    },
  });



}
seed()