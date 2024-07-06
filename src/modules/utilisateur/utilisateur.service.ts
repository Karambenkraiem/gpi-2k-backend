/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import  * as bcrypt from 'bcrypt'
@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) { }

  async create(createUtilisateurDto: CreateUtilisateurDto) {
    const {password,...rest}=createUtilisateurDto
    const salt= await bcrypt.genSalt()
    const hashedPassword=await bcrypt.hash(password, salt)
    return await this.prisma.utilisateur.create({
      data: {
        ...createUtilisateurDto,
        password:hashedPassword,
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
      
      },
    });
  }
  
  

  remove(idUtilisateur: number) {
    return this.prisma.utilisateur.delete({
      where: { idUtilisateur }
    });
  }
}
