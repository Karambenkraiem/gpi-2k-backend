/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) { }

  create(createUtilisateurDto: CreateUtilisateurDto) {
    return this.prisma.utilisateur.create({
      data: {
        ...createUtilisateurDto,
        idSpecialite: createUtilisateurDto.idSpecialite || undefined,
      },
    });
  }

  findAll() {
    return this.prisma.utilisateur.findMany({
      include:{Specialite:{include:{Departement:true}}}

    });
  }

  findOne(idUtilisateur: number) {
    return this.prisma.utilisateur.findUnique({
      where: { idUtilisateur },
      include:{Specialite:{include:{Departement:true}}}
    });
  }

  update(idUtilisateur: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.prisma.utilisateur.update({
      where: { idUtilisateur },
      data: {
        password: updateUtilisateurDto.password,
        fullName: updateUtilisateurDto.fullName,
        email: updateUtilisateurDto.email,
        createdAt: updateUtilisateurDto.createdAt,
        lastLogin: updateUtilisateurDto.lastLogin,
        roleUtilisateur: updateUtilisateurDto.roleUtilisateur,
        etatUtilisateur: updateUtilisateurDto.etatUtilisateur,
        telFix: updateUtilisateurDto.telFix,
        telMobile: updateUtilisateurDto.telMobile,
        idSpecialite: updateUtilisateurDto.idSpecialite,
        Affectation: updateUtilisateurDto.Affectation,
        Emprunt: updateUtilisateurDto.Emprunt,
      },
    });
  }
  
  

  remove(idUtilisateur: number) {
    return this.prisma.utilisateur.delete({
      where: { idUtilisateur }
    });
  }
}
