import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSocieteDto } from './dto/create-societe.dto';
import { UpdateSocieteDto } from './dto/update-societe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SocieteService {
  constructor(private readonly prisma:PrismaService){ }
  create(createSocieteDto: CreateSocieteDto) {
    return this.prisma.societe.create({
      data:createSocieteDto
    });
  }

  // findAll(adresse:string,numtel:string) {
  //   let where= { OR: [] } 
  //   if (adresse) {
  //     where.OR.push({
  //       adresse : adresse
  //     })
  //   }
  //   if(numtel){
  //     where.OR.push({
  //       numtel:numtel
  //     })
  //   }    
  //   return this.prisma.societe.findMany({
  //     where:{
  //       OR: [{adresse},{numtel}]
  //     }
  //   });    
  // }



  findAll() {
    return this.prisma.societe.findMany()
  }

  findOne(idSociete: number) {
    return this.prisma.societe.findUnique({
      where:{idSociete}
    });
  }

  update(idSociete: number, updateSocieteDto: UpdateSocieteDto) {
    throw new BadRequestException("400")
  }
  remove(idSociete: number) {
    return this.prisma.societe.delete({
      where:{idSociete}
    });

  
  

  


  }




}
