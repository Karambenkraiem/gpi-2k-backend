import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AffectationService {
  constructor(private prisma: PrismaService) { }
  create(createAffectationDto: CreateAffectationDto) {
    return this.prisma.affectation.create({
      data: createAffectationDto
    });
  }

  findAll() {
    return this.prisma.affectation.findMany();
  }

  findOne(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.affectation.findMany({
      where: {
        idUtilisateur,
        numeroSerie,
      },
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
