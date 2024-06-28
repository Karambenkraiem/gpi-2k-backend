import { Injectable } from '@nestjs/common';

import { UpdateLicenceDto } from './dto/update-licence.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLicenceDto } from './dto/create-licence.dto';

@Injectable()
export class LicenceService {
  constructor (private prisma: PrismaService){ }

  create(createLicenceDto: CreateLicenceDto) {
    return this.prisma.licence.create({
      data: {...createLicenceDto,
        dateActivation:new Date(createLicenceDto.dateActivation).toISOString(),
        dateExpiration:new Date(createLicenceDto.dateExpiration).toISOString()
      }
    });
  }

  findAll() {
    return this.prisma.licence.findMany({
      include: {Logiciel:true},
    });
  }

  // findOne(idLicence: number) {
  //   return this.prisma.licence.findUnique({
  //     where: { idLicence },
  //     include: { Logiciel: true },
  //   });
  // }

  findLogiciel(idLogiciel: number) {
    return this.prisma.licence.findMany({
      where: { idLogiciel }
    });
  }

  update(idLicence: number, updateLicenceDto: UpdateLicenceDto) {
    return this.prisma.licence.update({
      where: { idLicence },
      data:updateLicenceDto
    });
  }

  remove(idLicence: number) {
    return this.prisma.licence.delete({
      where: { idLicence },
    });
  }
}
