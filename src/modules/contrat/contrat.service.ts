import { Injectable } from '@nestjs/common';
import { CreateContratDto } from './dto/create-contrat.dto';
import { UpdateContratDto } from './dto/update-contrat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Societe } from '../societe/entities/societe.entity';

@Injectable()
export class ContratService {
  constructor (private prisma:PrismaService){ }
  create(createContratDto: CreateContratDto) {
    return this.prisma.contrat.create({
      data: createContratDto
    })
  }

  findAll() {
    return this.prisma.contrat.findMany()
  }

  findOne(idContrat: number) {
    return this.prisma.contrat.findUnique({
      where:{idContrat}
    })
  }

  update(idContrat: number, updateContratDto: UpdateContratDto) {
    return this.prisma.contrat.update({
      where:{idContrat},
      data:updateContratDto
    })
  }

  remove(idContrat: number) {
    return this.prisma.contrat.delete({
      where:{idContrat}
    })
  }
}
