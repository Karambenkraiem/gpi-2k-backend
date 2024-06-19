import { Injectable } from '@nestjs/common';
import { CreateEmpruntDto } from './dto/create-emprunt.dto';
import { UpdateEmpruntDto } from './dto/update-emprunt.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpruntService {
  constructor(private prisma: PrismaService) { }
  create(createEmpruntDto: CreateEmpruntDto) {
    return this.prisma.emprunt.create({
      data: createEmpruntDto
    });
  }

  findAll() {
    return this.prisma.emprunt.findMany({
      include:{
        utilisateur:{
          select:{fullName:true}
        },
        materiel:true
      }
    });
  }


  findOne(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.emprunt.findMany({
      where: {
        idUtilisateur,
        numeroSerie,
      },
    });
  }

  
  
  update(idUtilisateur: number, numeroSerie: string, updateEmpruntDto: UpdateEmpruntDto) {
    return this.prisma.emprunt.update(
      {
        where: {
          idUtilisateur_numeroSerie: {
            idUtilisateur,
            numeroSerie
          }
        },
        data: updateEmpruntDto
      }
    )
  }

  remove(idUtilisateur: number, numeroSerie: string) {
    return this.prisma.emprunt.delete({
      where: {
        idUtilisateur_numeroSerie: {
          idUtilisateur,
          numeroSerie
        }
      }
    })
  }
}
