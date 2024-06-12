import { Injectable } from '@nestjs/common';
import { CreateSpecialiteDto } from './dto/create-specialite.dto';
import { UpdateSpecialiteDto } from './dto/update-specialite.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpecialiteService {
  constructor(private prisma: PrismaService) {}
  create(createSpecialiteDto: CreateSpecialiteDto) {
    return this.prisma.specialite.create({
      data:createSpecialiteDto
    });
  }

  findAll() {
    return this.prisma.specialite.findMany({
      include:{Departement:true}
    });
    
  }

  findOne(idSpecialite:string) {
    return this.prisma.specialite.findUnique({
      where:{idSpecialite},
      include:{Departement:true}
    });
  }

  update(idSpecialite:string, updateSpecialiteDto: UpdateSpecialiteDto) {
    return this.prisma.specialite.update({
      where:{idSpecialite},
      data:updateSpecialiteDto
    });
  }

  remove(idSpecialite:string) {
    return this.prisma.specialite.delete({
      where:{idSpecialite}
    });
  }
}
