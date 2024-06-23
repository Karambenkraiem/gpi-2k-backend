import { Injectable } from '@nestjs/common';
import { CreateEmpruntDto } from './dto/create-emprunt.dto';
import { UpdateEmpruntDto } from './dto/update-emprunt.dto';
import { PrismaService } from 'src/prisma/prisma.service';

// @Injectable()
// export class EmpruntService {
//   constructor(private prisma: PrismaService) { }
//   create(createEmpruntDto: CreateEmpruntDto) {
//     return this.prisma.emprunt.create({
//       data: {...createEmpruntDto,
//         dateEmprunt: new Date(createEmpruntDto.dateEmprunt).toISOString(),
//       }
//     });
//   }
@Injectable()
export class EmpruntService {
  constructor(private prisma: PrismaService) {}

  async create(createEmpruntDto: CreateEmpruntDto) {
    const { dateEmprunt, dateRestitution, ...rest } = createEmpruntDto;

    // Convert dates to ISO string format
    const isoDateEmprunt = new Date(dateEmprunt).toISOString();
    const isoDateRestitution = dateRestitution ? new Date(dateRestitution).toISOString() : null;

    return this.prisma.emprunt.create({
      data: {
        ...rest, // Spread remaining fields from createEmpruntDto
        dateEmprunt: isoDateEmprunt,
        dateRestitution: isoDateRestitution,
      },
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

  findMaterialEmprunts(numeroSerie: string) {
    return this.prisma.emprunt.findMany({
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
  
  update(idUtilisateur: number, numeroSerie: string, updateEmpruntDto: UpdateEmpruntDto) {
    const {dateEmprunt, dateRestitution, refProjet, etatMatRestitution, etatEmprunt} = updateEmpruntDto;
    const isoDateRestitution = dateRestitution ? new Date(dateRestitution).toISOString() : null;
    return this.prisma.emprunt.update(
      {
        where: {
          idUtilisateur_numeroSerie: {
            idUtilisateur,
            numeroSerie
          }
        },
        data: {
          dateEmprunt: new Date(dateEmprunt),
          dateRestitution: isoDateRestitution,
          refProjet,
          etatMatRestitution,
          etatEmprunt
        }
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
