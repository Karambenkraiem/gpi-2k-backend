import { Injectable } from '@nestjs/common';
import { CreateLogicielDto } from './dto/create-logiciel.dto';
import { UpdateLogicielDto } from './dto/update-logiciel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LogicielsService {
  constructor (private prisma:PrismaService){ }

  create(createLogicielDto: CreateLogicielDto) {
    const { dateAcquisition, ...rest } = createLogicielDto;

    return this.prisma.logiciel.create({
      data: {
        ...rest,
        dateAcquisition: dateAcquisition ? new Date(createLogicielDto.dateAcquisition)?.toISOString() : undefined
      }
    })
  }

  findAll() {
    return this.prisma.logiciel.findMany();
  }

  findOne(idLogiciel: number) {
    return this.prisma.logiciel.findUnique({
      where: { idLogiciel }
    });
  }

  update(idLogiciel: number, updateLogicielDto: UpdateLogicielDto) {
    const { dateAcquisition, ...rest } = updateLogicielDto;
  
    return this.prisma.logiciel.update({
        where: {idLogiciel},
        data:{
          ...rest,
          dateAcquisition:dateAcquisition? new Date(updateLogicielDto.dateAcquisition)?.toISOString(): undefined
        }
      });
    }
  
  remove(idLogiciel: number) {
    return this.prisma.logiciel.delete({
      where:{idLogiciel}
    });
  }
}


