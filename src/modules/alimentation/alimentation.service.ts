import { Injectable } from '@nestjs/common';
import { CreateAlimentationDto } from './dto/create-alimentation.dto';
import { UpdateAlimentationDto } from './dto/update-alimentation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlimentationService {
  constructor(private prisma: PrismaService) {}

  create(createAlimentationDto: CreateAlimentationDto) {
    return this.prisma.alimentation.create({
      data: {
        ...createAlimentationDto,
        dateAlimentation: new Date().toISOString(),
      },
      include: {
        Stocks: true,
      },
    });
  }


  findAll() {
    return this.prisma.alimentation.findMany({
      include: {
        Societe: {
          select: { raisonSociale: true } // Sélectionnez uniquement le nom complet de la societe
        },
        Stocks:true        
      }
    });
  }

  findOne(idSociete: number, refArt: string) {
    return this.prisma.alimentation.findMany({
      where: {
        idSociete,
        refArt,
        
      },
    });
  }

  findStocksAlimentation(refArt: string) {
    return this.prisma.alimentation.findMany({
      where: {
        refArt,
      },
      include: {
        Societe: {
          select: { raisonSociale: true } // Sélectionnez uniquement le nom complet de l'utilisateur
        },
        Stocks:true        
      }
    });
  }







  update(idSociete: number, refArt: string, updateAlimentationDto: UpdateAlimentationDto) {
    const { dateAlimentation, quantiteAlimente } = updateAlimentationDto;
  
    return this.prisma.alimentation.update({
      where: {
        idSociete_refArt: {
          idSociete,
          refArt
        }
      },
      data: {
        dateAlimentation: dateAlimentation ? new Date(dateAlimentation):null,
        quantiteAlimente,
        
      }
    });
  }
  

  remove(idSociete: number, refArt: string) {
    return this.prisma.alimentation.delete({
      where: {
        idSociete_refArt: {
          idSociete,
          refArt
        }
      }
    })
  }
}
