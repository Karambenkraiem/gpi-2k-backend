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
        dateAcquisition: dateAcquisition ? new Date(createMaterielDto.dateAcquisition)?.toISOString() : undefined
      },
    });
  }

  findAll() {
    return this.prisma.materiel.findMany({
      include: {Affectation: true,Emprunt:true}
      });
  }


      include: {
        Affectation: {
          select: {
            etatAffectation: true,
          },
        },
        Emprunt: {
          select: {
            etatEmprunt: true,
          },
        },
      },
    });
  }  
  // findAll() {
  //   return this.prisma.materiel.findMany({
  //     include: {
  //       Affectation: true,
  //       Emprunt: true
  //     }
  //   })
  // }
  findOne(numeroSerie: string) {
    return this.prisma.materiel.findUnique({
      where: { numeroSerie },
    });
  }

  

  update(numeroSerie: string, updateMaterielDto: UpdateMaterielDto) {
    const { dateAcquisition, ...rest } = updateMaterielDto;

    return this.prisma.materiel.update({
      where: { numeroSerie },
      data: {
        ...rest,
        dateAcquisition: dateAcquisition ? new Date(dateAcquisition).toISOString() : undefined,
      },
      include: {
        Affectation: true,
        Emprunt: true
      }
    })
  }

  // async remove(numeroSerie: string) {
  //   await this.prisma.affectation.deleteMany({
  //     where: { numeroSerie },
  //   });

  //   // Delete related records in the Emprunt table
  //   await this.prisma.emprunt.deleteMany({
  //     where: { numeroSerie },
  //   });

  //   // Proceed with the delete operation for the Materiel record
  //   return this.prisma.materiel.delete({
  //     where: { numeroSerie },
  //   });
  // }
}
