import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSocieteDto } from './dto/create-societe.dto';
import { UpdateSocieteDto } from './dto/update-societe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SocieteService {
  constructor(private readonly prisma: PrismaService) { }
  create(createSocieteDto: CreateSocieteDto) {
    return this.prisma.societe.create({
      data: createSocieteDto
    });
  }

  findAll() {
    return this.prisma.societe.findMany({
      include: {
        Materiel: true,
        Logiciel: true,
        Alimentation: true
      }
    })
  }

  findOne(idSociete: number) {
    return this.prisma.societe.findUnique({
      where: { idSociete },
      include: {
        Materiel: true,
        Logiciel: true,
        Alimentation: true
      }
    });
  }

  update(idSociete: number, updateSocieteDto: UpdateSocieteDto) {
    return this.prisma.societe.update({
      data: updateSocieteDto,
      where: { idSociete }
    })
  }


  remove(idSociete: number) {
    return this.prisma.societe.delete({
      where: { idSociete }
    });
  }



////////////////////////////////////////////////

findMaterielsForSociete(idSociete: number) {
  return this.prisma.materiel.findMany({
    where: {
      idSociete: idSociete,
    },
  });
}

findAlimentationsForSociete(idSociete: number) {
  return this.prisma.alimentation.findMany({
    where: {
      idSociete: idSociete,
    },
  });
}




}
