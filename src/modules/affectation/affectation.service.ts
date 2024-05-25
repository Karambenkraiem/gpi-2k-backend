import { Injectable } from '@nestjs/common';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AffectationService {
  constructor(private prisma: PrismaService) {}
  create(createAffectationDto: CreateAffectationDto) {
    return this.prisma.affectation.create({
      data:createAffectationDto
    });
  }

  findAll() {
    return this.prisma.affectation.findMany();
  }

  findOne(idUtilisateur:number,numeroSerie:string) {
    let where= {} 
    if (idUtilisateur) {
      where({
        idUtilisateur : idUtilisateur
      })
    }
    if(numeroSerie){
      where({
        numeroSerie:numeroSerie
      })
    }    
    return this.prisma.affectation.findUnique({
      where
    });    
  }

  update(idUtilisateur:number, numeroSerie:string, updateAffectationDto: UpdateAffectationDto) {
    let where= {}
    if(idUtilisateur){
      where:{idUtilisateur} //rani na3ser fi mo55i bech netfakker
    }
    if(numeroSerie){
      where:{numeroSerie}
    }
    return this.prisma.affectation.update({
      where:{},
      data:updateAffectationDto
    });
  }

  remove(idUtilisateur:number, numeroSerie:string) {
    return this.prisma.affectation.delete({
      where:
    });
  }
}
