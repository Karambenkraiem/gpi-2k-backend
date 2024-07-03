import { Injectable } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncidentService {

  constructor(private prisma: PrismaService) {}

  create(createIncidentDto: CreateIncidentDto) {
    return this.prisma.incident.create({
      data:{
        ...createIncidentDto,
        dateCreation: new Date(
          createIncidentDto.dateCreation,
        )?.toISOString(),
      },
    });
  }

  findAll() {
    return this.prisma.incident.findMany({
      include:{
        Materiel: true,
        Logiciel:true
      }
    });
  }

  findIncidentsClotures(demandeurId: number){
    return this.prisma.incident.findMany({
      where: {
        etatReclamation:"Cloturé",
        demandeurId: demandeurId,
      },
      include:{
        Materiel: true,
        Logiciel:true
      }
    });
  }

  findIncidentsEnCours(demandeurId: number){
    return this.prisma.incident.findMany({
      where: {
        etatReclamation:{in : ["En attente de traitement", "En cours de traitement", "En attende de validation", "Résolu", "Réececution" ]},
        demandeurId: demandeurId,
      },
      include:{
        Materiel: true,
        Logiciel:true
      }
    });
  }

  findAllIncidentsClotures(){
    return this.prisma.incident.findMany({
      where: {
        etatReclamation:"Cloturé",
      },
      include:{
        Materiel: true,
        Logiciel:true
      }
    });
  }

  findAllIncidentsEnCours(){
    return this.prisma.incident.findMany({
      where: {
        etatReclamation:{in : ["Attente traitement", "En cours de traitement", "En attende de validation", "Résolu", "Réececution" ]},
      },
      include:{
        Materiel: true,
        Logiciel:true
      }
    });
  }

  findOne(idIncident: number) {
    return this.prisma.incident.findUnique({
      where: {idIncident}
    });
  }

  update(idIncident: number, updateIncidentDto: UpdateIncidentDto) {
    const {
      dateCloture,
    } = updateIncidentDto
    const isoDateDesinstall = dateCloture? new Date(dateCloture).toISOString() : null;
    return this.prisma.incident.update({
      where: {idIncident},
      data:{
        ...updateIncidentDto,
        dateCloture:isoDateDesinstall,
      },
    });
  }

  remove(idIncident: number) {
    return this.prisma.incident.delete({
      where:{idIncident}
    });
  }
}
