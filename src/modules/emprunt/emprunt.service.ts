import { Injectable } from '@nestjs/common';
import { CreateEmpruntDto } from './dto/create-emprunt.dto';
import { UpdateEmpruntDto } from './dto/update-emprunt.dto';
import { PrismaService } from 'src/prisma/prisma.service';

// @Injectable()
// export class EmpruntService {
//   constructor(private prisma: PrismaService) { }
//   create(createEmpruntDto: CreateEmpruntDto) {
//     return this.prisma.emprunt.create({
//       data: {...createEmpruntDto,
//         dateEmprunt: new Date(createEmpruntDto.dateEmprunt).toISOString(),
//       }
//     });
//   }
@Injectable()
export class EmpruntService {
  constructor(private prisma: PrismaService) {}

  async create(createEmpruntDto: CreateEmpruntDto) {
    const { dateEmprunt, dateRestitution, ...rest } = createEmpruntDto;

    // Convert dates to ISO string format
    const isoDateEmprunt = new Date(dateEmprunt).toISOString();
    const isoDateRestitution = dateRestitution
      ? new Date(dateRestitution).toISOString()
      : null;

    return this.prisma.emprunt.create({
      data: {
        ...rest, // Spread remaining fields from createEmpruntDto
        dateEmprunt: isoDateEmprunt,
        dateRestitution: isoDateRestitution,
      },
    });
  }

  findAll() {
    return this.prisma.emprunt.findMany({
      include: {
        Utilisateur: {
          select: { fullName: true },
        },
        Materiel: true,
      },
    });
  }

  findUserMatEmprunt(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.emprunt.findMany({
      where: {
        idUtilisateur,
        numeroSerie,
      },
    });
  }

  findOne(idEmprunt: number) {
    return this.prisma.emprunt.findMany({
      where: {
        idEmprunt,
      },
    });
  }

  findMaterialEmprunts(numeroSerie: string) {
    return this.prisma.emprunt.findMany({
      where: {
        numeroSerie,
      },
      include: {
        Utilisateur: {
          select: { fullName: true }, // Sélectionnez uniquement le nom complet de l'utilisateur
        },
        Materiel: true,
      },
    });
  }

  update(idEmprunt: number, updateEmpruntDto: UpdateEmpruntDto) {
    const {
      dateEmprunt,
      dateRestitution,
      refProjet,
      etatMatRestitution,
      etatEmprunt,
    } = updateEmpruntDto;
    const isoDateRestitution = dateRestitution
      ? new Date(dateRestitution).toISOString()
      : null;
    return this.prisma.emprunt.update({
      where: {
        idEmprunt,
      },
      data: {
        dateEmprunt: new Date(dateEmprunt),
        dateRestitution: isoDateRestitution,
        refProjet,
        etatMatRestitution,
        etatEmprunt,
      },
    });
  }

  remove(idEmprunt: number) {
    return this.prisma.emprunt.delete({
      where: { idEmprunt },
    });
  }
}
