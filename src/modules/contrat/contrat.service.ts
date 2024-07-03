import { Injectable } from '@nestjs/common';
import { CreateContratDto } from './dto/create-contrat.dto';
import { UpdateContratDto } from './dto/update-contrat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Societe } from '../societe/entities/societe.entity';
import { EtatContrat, TypeContrat } from '@prisma/client';

@Injectable()
export class ContratService {
  constructor(private prisma: PrismaService) { }
  create(createContratDto: CreateContratDto) {
    const { dateDebutContrat, dateFinContrat, montantContrat, ...rest } = createContratDto;

    return this.prisma.contrat.create({
      data: {
        dateDebutContrat: new Date(dateDebutContrat).toISOString(),
        dateFinContrat: new Date(dateFinContrat).toISOString(),
        montantContrat,
        descriptionContrat: " ",
        contratRenouvable: false,
        
        
      }
    })
  }

  findAll() {
    return this.prisma.contrat.findMany()
  }

  findOne(idContrat: number) {
    return this.prisma.contrat.findUnique({
      where: { idContrat }
    })
  }

  update(idContrat: number, updateContratDto: UpdateContratDto) {
    const { etatContrat, ...rest } = updateContratDto;
    return this.prisma.contrat.update({
      where: { idContrat },
      data: {
        ...rest, etatContrat: etatContrat,
      },
      include: {
        Signature: true
      },
      
    })
  }

  remove(idContrat: number) {
    return this.prisma.contrat.delete({
      where: { idContrat }
    })
  }
}
