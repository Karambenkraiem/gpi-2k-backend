import { Injectable } from '@nestjs/common';
import { CreateInstallationDto } from './dto/create-installation.dto';
import { UpdateInstallationDto } from './dto/update-installation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstallationService {
  constructor(private prisma: PrismaService) {}
  create(createInstallationDto: CreateInstallationDto) {
    return this.prisma.installation.create({
      data:{...createInstallationDto,
        dateInstallation:new Date(createInstallationDto.dateInstallation)?.toISOString()
      }
    });
  }

  findAll() {
    return this.prisma.installation.findMany({
      include: {
        Licence:true ,
        Materiel:true        
      }
    });
  }  

  findOne(idInstallation: number) {
    return this.prisma.installation.findMany({
      where: {idInstallation}
    });
  }

  findInstallation(numeroSerie: string, idLicence) {
    return this.prisma.installation.findMany({
      where: {
        numeroSerie,
      },
      include: {
        Licence:true ,
        Materiel:true        
      }
    });
  }


  update(idInstallation: number, updateInstallationDto: UpdateInstallationDto) {
    return this.prisma.installation.update({
      where:{idInstallation},
      data:updateInstallationDto,
    });
  }

  remove(idInstallation: number) {
    return this.prisma.installation.delete({
      where:{idInstallation}
    });
  }
}
