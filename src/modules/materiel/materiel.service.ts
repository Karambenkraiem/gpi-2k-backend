import { Injectable } from '@nestjs/common';
import { UpdateMaterielDto } from './dto/update-materiel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMaterielDto } from './dto/create-materiel.dto';

@Injectable()
export class MaterielService {
  constructor(private prisma: PrismaService) { }
  
  create(createMaterielDto: CreateMaterielDto) {
    const { dateAcquisition, ...rest } = createMaterielDto;
    return this.prisma.materiel.create({
      data: {
        ...rest,
        dateAcquisition: dateAcquisition ? new Date(createMaterielDto.dateAcquisition)?.toISOString() : null
      },
    });
  }

  findAll() {
    return this.prisma.materiel.findMany({
      include: {Affectation: true,Emprunt:true}
      });
  }  

  findUCPC() {
    return this.prisma.materiel.findMany({
      where: {
        categorie: { in: ['PcPortable', 'UniteCentrale', 'Serveur'] },
      },
      include: {
        Affectation: true,
        Emprunt: true,
      },
    });
  }

  findOne(numeroSerie: string) {
    return this.prisma.materiel.findUnique({
      where: { numeroSerie },
    });
  }

  

  update(numeroSerie: string, updateMaterielDto: UpdateMaterielDto) {
    const { dateAcquisition, ...rest } = updateMaterielDto;

    return this.prisma.materiel.update({
      where: { numeroSerie },
      data: updateMaterielDto,
      include: {
        Affectation: true,
        Emprunt: true
      }
    })
  }

}
