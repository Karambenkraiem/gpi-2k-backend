import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function seed() {
    await prisma.societe.create({
        data: {
            raisonSociale: "string",
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
            idUtilisateur: 123,
            password: "string",
            fullName: "string",
            email: "string",
            createdAt: new Date(),
            lastLogin: new Date(),
            role: "string",
            etat: "string",
            telFix: "string",
            telMobile: "string",
        }
    })
}
seed()