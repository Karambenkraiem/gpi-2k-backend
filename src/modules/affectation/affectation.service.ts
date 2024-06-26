import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AffectationService {
  constructor(private prisma: PrismaService) {}

  create(createAffectationDto: CreateAffectationDto) {
    return this.prisma.affectation.create({
      data: {
        ...createAffectationDto,
        dateAttribution: new Date(
          createAffectationDto.dateAttribution,
        ).toISOString(),
      }
    });
  }

  findAll() {
    return this.prisma.affectation.findMany({
      include: {
        Utilisateur: {
          select: { fullName: true } // Sélectionnez uniquement le nom complet de l'utilisateur
        },
        Materiel:true        
      }
    });
  }

  findUserMatAffect(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.affectation.findMany({
      where: {
        idUtilisateur,
        numeroSerie,
      },
    });
  }

  findOne(idAffectation: number) {
    return this.prisma.affectation.findMany({
      where: {
        idAffectation,
        AND: [{ dateRetour: null }, { dateRetour: '' }],
      },
    });
  }

  findMaterialAffectations(numeroSerie: string) {
    return this.prisma.affectation.findMany({
      where: {
        numeroSerie,
      },
      include: {
        Utilisateur: {
          select: { fullName: true },
        },
        Materiel: true,
      },
    });
  }

  update(idAffectation: number, updateAffectationDto: UpdateAffectationDto) {
    const { dateAttribution, dateRetour, motifRetour } = updateAffectationDto;
    const isoDateRetour = dateRetour
      ? new Date(dateRetour).toISOString()
      : null;
    return this.prisma.affectation.update({
      where: { idAffectation },
      data: {
        dateAttribution: new Date(dateAttribution),
        dateRetour: isoDateRetour,
        motifRetour,
      },
    });
  }

  remove(idAffectation: number) {
    return this.prisma.affectation.delete({
      where: { idAffectation },
    });
  }
}
