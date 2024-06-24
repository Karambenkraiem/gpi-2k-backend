import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AffectationService {
  constructor(private prisma: PrismaService) { }
  create(createAffectationDto: CreateAffectationDto) {
    return this.prisma.affectation.create({
      data: {...createAffectationDto,
        dateAttribution:new Date(createAffectationDto.dateAttribution)?.toISOString()
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

  findOne(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.affectation.findMany({
      where: {
        idUtilisateur,
        numeroSerie,
        OR: [
          { dateRetour: null },
          { dateRetour: '' },
        ],
      },
    });
  }
  

  // findOne(idUtilisateur: number, numeroSerie: string) {
  //   return this.prisma.affectation.findMany({
  //     where: {
  //       idUtilisateur,
  //       numeroSerie,
  //     },
  //   });
  // }

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
    const { dateAttribution, dateRetour, motifRetour, etatAffectation } = updateAffectationDto;
    const isoDateRetour = dateRetour ? new Date(dateRetour).toISOString() : null;
    return this.prisma.affectation.update({
      where: {
        idUtilisateur_numeroSerie: {
          idUtilisateur,
          numeroSerie
        }
      },
      data: {
        dateAttribution: new Date(dateAttribution),
        dateRetour: isoDateRetour,
        motifRetour,
        etatAffectation
      }
    });
  }
  

  // update(idUtilisateur: number, numeroSerie: string, updateAffectationDto: UpdateAffectationDto) {
  //   return this.prisma.affectation.update(
  //     {
  //       where: {
  //         idUtilisateur_numeroSerie: {
  //           idUtilisateur,
  //           numeroSerie
  //         }
  //       },
  //       data: {
  //         dateAttribution: updateAffectationDto.dateAttribution,
  //         dateRetour: updateAffectationDto.dateRetour,
  //         motifRetour: updateAffectationDto.motifRetour,
  //         etatAffectation: updateAffectationDto.etatAffectation,
  //       }
  //     }
  //   )
  // }

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
