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
}
seed()