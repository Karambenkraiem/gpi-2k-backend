import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UtilisateurService {
  constructor(private prisma: PrismaService) { }

  create(createUtilisateurDto: CreateUtilisateurDto) {
    return this.prisma.utilisateur.create({
      data: createUtilisateurDto
    });
  }

  findAll() {
    return this.prisma.utilisateur.findMany();
  }

  findOne(idUtilisateur: number) {
    return this.prisma.utilisateur.findUnique({
      where: { idUtilisateur }
    });
  }

  update(idUtilisateur: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.prisma.utilisateur.update({
      where: { idUtilisateur },
      data: updateUtilisateurDto
    });
  }

  remove(idUtilisateur: number) {
    return this.prisma.utilisateur.delete({
      where: { idUtilisateur }
    });
  }
}
