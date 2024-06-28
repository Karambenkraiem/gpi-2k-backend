import { Injectable } from '@nestjs/common';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartementService {
  constructor (private prisma:PrismaService){ }
  
  create(createDepartementDto: CreateDepartementDto) {
    return this.prisma.departement.create({
      data:createDepartementDto
    });
  }

  findAll() {
    return this.prisma.departement.findMany();
  }

  findOne(idDepartement: string) {
    return this.prisma.departement.findUnique({
      where: {idDepartement}
    });
  }

  update(idDepartement: string, updateDepartementDto: UpdateDepartementDto) {
    return this.prisma.departement.update({
      where: {idDepartement},
      data:updateDepartementDto
    });
  }

  remove(idDepartement: string) {
    return this.prisma.departement.delete({
      where:{idDepartement}
    });
  }
}
