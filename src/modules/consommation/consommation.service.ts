import { Injectable } from '@nestjs/common';
import { CreateConsommationDto } from './dto/create-consommation.dto';
import { UpdateConsommationDto } from './dto/update-consommation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConsommationService {
  constructor(private prisma: PrismaService) {}

  create(createConsommationDto: CreateConsommationDto) {
    return  this.prisma.consommation.create({
      data: {
        ...createConsommationDto,
        dateConsommation: new Date().toISOString(),
      }
    });;
  }

  findAll() {
    return this.prisma.consommation.findMany({
      include: {
        Materiel: {
          select: { numeroSerie: true, categorie:true, marque:true, modele:true } // Sélectionnez uniquement le nom complet de la societe
        },
        Stocks:{
          select:{ refArt:true, categorie:true, marque:true, modele:true, quantiteStock:true}
        },
        Utilisateur:{
          select:{ fullName:true}
        }        
      }
    });
  }  

  findOne(idConsommation: number) {
    return this.prisma.consommation.findMany({
      where:{idConsommation}
    });
  }

  update(idConsommation: number, updateConsommationDto: UpdateConsommationDto) {
    const { dateConsommation, quantiteConsomme } = updateConsommationDto;
  
    return this.prisma.consommation.update({
      where: { idConsommation },
      data: {
        dateConsommation: dateConsommation ? new Date(dateConsommation):null,
        quantiteConsomme,
        
      }
    });
  }

  remove(id: number) {
    return `This action removes a #${id} consommation`;
  }
}
