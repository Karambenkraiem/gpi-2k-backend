import { Injectable } from '@nestjs/common';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MaterielService {
  constructor (private prisma:PrismaService){ }
  create(createMaterielDto: CreateMaterielDto) {
    return this.prisma.materiel.create({
      data:createMaterielDto
    });
  }

  findAll() {
    return this.prisma.materiel.findMany();
  }

  findOne(numeroSerie: string) {
    return this.prisma.materiel.findUnique({
      where: {numeroSerie}
    });
  }

  update(numeroSerie: string, updateMaterielDto: UpdateMaterielDto) {
    return this.prisma.materiel.update({
      where: {numeroSerie},
      data:updateMaterielDto
    });
  }

  remove(numeroSerie: string) {
    return this.prisma.materiel.delete({
      where:{numeroSerie}
    });
  }
}
