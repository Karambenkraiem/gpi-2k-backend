/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MaterielService {
  constructor(private prisma: PrismaService) {}
  create(createMaterielDto: CreateMaterielDto) {
    return this.prisma.materiel.create({
      data: {
        categorie: 'UniteCentrale',
        numeroSerie: '',
        modele: '',
        prix: parseFloat(createMaterielDto.prix), // Ensure prix is a number
        garantie: '',
        etatMateriel: 'nouveau',
        dateAcquisition: new Date(createMaterielDto.dateAcquisition), // Ensure date is in Date format
        idSociete:parseInt(createMaterielDto.idSociete) ,
        processeurPC: '',
        memoireCache: '',
        ram: '',
        disque: '',
        carteGraphique: '',
        marque: '',
      },
    });
  }

  findAll() {
    return this.prisma.materiel.findMany({
      include: {societe:true}
    });
  }

  findOne(numeroSerie: string) {
    return this.prisma.materiel.findUnique({
      where: { numeroSerie },
    });
  }

  update(numeroSerie: string, updateMaterielDto: UpdateMaterielDto) {
    return this.prisma.materiel.update({
      where: { numeroSerie },
      data: updateMaterielDto,
    });
  }

  remove(numeroSerie: string) {
    return this.prisma.materiel.delete({
      where: { numeroSerie },
    });
  }
}
