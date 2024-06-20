import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.societe.createMany({
    data: [
      {
        raisonSociale: "NetUse",
        adresse: "Centre Urbain Nord",
        responsable: "AbdelAziz KRAIDI",
        email: "contact@netuse.com.tn",
        numtel: "71948225",
        secteurActivite: "Prestataire de service",
        typeSociete: "prestataireService",
      },
      {
        raisonSociale: "Intelo",
        adresse: "Alain SAVARI",
        responsable: "Koussay",
        email: "contact@intelo.com.tn",
        numtel: "71850600",
        secteurActivite: "Vente Matériels informatique",
        typeSociete: "fournisseur",
      }
    ]
  });

  await prisma.departement.create({
    data: {
      idDepartement: "DASI",
      nom: "Département Achat et Système d'informations",
    }
  });

  await prisma.specialite.create({
    data: {
      idSpecialite: "IT_ADMIN",
      nom: "Administrateur Système",
      idDepartement: "DASI"
    }
  });

  await prisma.utilisateur.create({
    data: {
      idUtilisateur: 616,
      password: "123",
      fullName: "Kheireddine MHAMDI",
      email: "kh.mhamdi@teci.com.tn",
      createdAt: new Date(),
      lastLogin: new Date(),
      roleUtilisateur: "ADMINISTRATEUR",
      etatUtilisateur: "actif",
      telFix: "924",
      telMobile: "53722910",
      idSpecialite: "IT_ADMIN"
    }
  });

  await prisma.materiel.createMany({
    data: [
      {
        numeroSerie: "CZC7367N7F",
        categorie: "UniteCentrale",
        marque: "HP",
        modele: "ProDesk 400 G4 MT",
        prix: 2000,
        garantie: "1",
        etatMateriel: "fonctionnel",
        dateAcquisition: new Date('2018-12-28'),
        nombrePortSwitch: null,
        debitSwitch: null,
        technologieSwitch: null,
        processeurPC: "3.6 Ghz",
        memoireCache: "8 Mo",
        ram: "8 Go",
        disque: "1*SSD 256 Go + 1*HDD 1To",
        carteGraphique: "2 Go",
        nombreDisque: "2",
        tailleEcran: null,
        etatBatteriePcPortable: null,
        vitesseImpression: null,
        connexionWLU: null,
        technologieOnduleur: null,
        fonctionSupplementaireScanImp: null,
        vitesseScanner: null,
        typeScanner: null,
        resolutionScanImpVideoP: null,
        technologieImpression: null,
        formatScanImp: null,
        poidsOnduleur: null,
        autonomieOnduleur: null,
        capaciteChargeOnduleur: null,
        entreeHDMI_VideoProjecteur: false,
        entreeVGA_VideoProjecteur: false,
        entreeUSB_VideoProjecteur: false,
        entreeLAN_VideoProjecteur: false,
        idSociete: 2
      },
      {
        numeroSerie: "124Q08KU",
        categorie: "Ecran",
        marque: "DELL",
        modele: "P2412Hb",
        prix: 800,
        garantie: "1",
        etatMateriel: "fonctionnel",
        dateAcquisition: new Date('2012-03-24'),
        nombrePortSwitch: null,
        debitSwitch: null,
        technologieSwitch: null,
        processeurPC: null,
        memoireCache: null,
        ram: null,
        disque: null,
        carteGraphique: null,
        nombreDisque: null,
        tailleEcran: 24,
        etatBatteriePcPortable: null,
        vitesseImpression: null,
        connexionWLU: null,
        technologieOnduleur: null,
        fonctionSupplementaireScanImp: null,
        vitesseScanner: null,
        typeScanner: null,
        resolutionScanImpVideoP: null,
        technologieImpression: null,
        formatScanImp: null,
        poidsOnduleur: null,
        autonomieOnduleur: null,
        capaciteChargeOnduleur: null,
        entreeHDMI_VideoProjecteur: false,
        entreeVGA_VideoProjecteur: false,
        entreeUSB_VideoProjecteur: false,
        entreeLAN_VideoProjecteur: false,
        idSociete: 2
      },
      {
        numeroSerie: "124Q07PU",
        categorie: "Ecran",
        marque: "DELL",
        modele: "P2412Hb",
        prix: 800,
        garantie: "1",
        etatMateriel: "fonctionnel",
        dateAcquisition: new Date('2012-03-24'),
        nombrePortSwitch: null,
        debitSwitch: null,
        technologieSwitch: null,
        processeurPC: null,
        memoireCache: null,
        ram: null,
        disque: null,
        carteGraphique: null,
        nombreDisque: null,
        tailleEcran: 24,
        etatBatteriePcPortable: null,
        vitesseImpression: null,
        connexionWLU: null,
        technologieOnduleur: null,
        fonctionSupplementaireScanImp: null,
        vitesseScanner: null,
        typeScanner: null,
        resolutionScanImpVideoP: null,
        technologieImpression: null,
        formatScanImp: null,
        poidsOnduleur: null,
        autonomieOnduleur: null,
        capaciteChargeOnduleur: null,
        entreeHDMI_VideoProjecteur: false,
        entreeVGA_VideoProjecteur: false,
        entreeUSB_VideoProjecteur: false,
        entreeLAN_VideoProjecteur: false,
        idSociete: 2
      },
      {
        numeroSerie: "5CD5502STZ",
        categorie: "PcPortable",
        marque: "HP",
        modele: "PAVILION Gaming 15-AK000NK",
        prix: 1790,
        garantie: "1",
        etatMateriel: "fonctionnel",
        dateAcquisition: new Date('2017-02-22'),
        nombrePortSwitch: null,
        debitSwitch: null,
        technologieSwitch: null,
        processeurPC: "2.6 Ghz",
        memoireCache: "8 Mo",
        ram: "16 Go",
        disque: '1*SSD 2.5" 480 Go + 1*SSD M2 480 Go',
        carteGraphique: "4 Go",
        nombreDisque: "2",
        tailleEcran: 15.6,
        etatBatteriePcPortable: "morte",
        vitesseImpression: null,
        connexionWLU: null,
        technologieOnduleur: null,
        fonctionSupplementaireScanImp: null,
        vitesseScanner: null,
        typeScanner: null,
        resolutionScanImpVideoP: null,
        technologieImpression: null,
        formatScanImp: null,
        poidsOnduleur: null,
        autonomieOnduleur: null,
        capaciteChargeOnduleur: null,
        entreeHDMI_VideoProjecteur: false,
        entreeVGA_VideoProjecteur: false,
        entreeUSB_VideoProjecteur: false,
        entreeLAN_VideoProjecteur: false,
        idSociete: 2
      }
    ]
  });

  await prisma.affectation.createMany({
    data: [
      {
        idUtilisateur: 616,
        numeroSerie: "CZC7367N7F",
        dateAttribution: new Date('2018-12-28'),
        dateRetour: new Date(),
        motifRetour: null,
        etatAffectation:"Affecté"
      },
      {
        idUtilisateur: 616,
        numeroSerie: "124Q08KU",
        dateAttribution: new Date('2018-12-28'),
        dateRetour: new Date(),
        motifRetour: null,
        etatAffectation:"Affecté"
      },
      {
        idUtilisateur: 616,
        numeroSerie: "124Q07PU",
        dateAttribution: new Date('2020-05-26'),
        dateRetour: null,
        motifRetour: null,
        etatAffectation:"Affecté"
      }
      
    ]
  });

  await prisma.emprunt.create({
    data: {
      idUtilisateur: 616,
      numeroSerie: "5CD5502STZ",
      dateEmprunt: new Date(),
      dateRestitution: null,
      refProjet: 'TERG',
      etatMatRestitution: "Bon etat",
      etatEmprunt:"emprunté"
    }
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });