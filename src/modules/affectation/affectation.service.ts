import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Utilisateur } from '../utilisateur/entities/utilisateur.entity';

@Injectable()
export class AffectationService {
  constructor(private prisma: PrismaService) { }
  create(createAffectationDto: CreateAffectationDto) {
    return this.prisma.affectation.create({
      data: {...createAffectationDto,
        dateAttribution:new Date(createAffectationDto.dateAttribution).toISOString()
      }
    });
  }

  findAll() {
    return this.prisma.affectation.findMany({
      include: {
        utilisateur: {
          select: { fullName: true } // Sélectionnez uniquement le nom complet de l'utilisateur
        },
        materiel:true        
      }
    });
  }


  findOne(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.affectation.findMany({
      where: {
        idUtilisateur,
        numeroSerie,
      },
    });
  }

  findMaterialAffectations(numeroSerie: string) {
    return this.prisma.affectation.findMany({
      where: {
        numeroSerie,
      },
      include: {
        utilisateur: {
          select: { fullName: true } // Sélectionnez uniquement le nom complet de l'utilisateur
        },
        materiel:true        
      }
    });
  }

  update(idUtilisateur: number, numeroSerie: string, updateAffectationDto: UpdateAffectationDto) {
    return this.prisma.affectation.update(
      {
        where: {
          idUtilisateur_numeroSerie: {
            idUtilisateur,
            numeroSerie
          }
        },
        data: updateAffectationDto
      }
    )
  }

  remove(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.affectation.delete({
      where: {
        idUtilisateur_numeroSerie: {
          idUtilisateur,
          numeroSerie
        }
      }
    })
  }
}
