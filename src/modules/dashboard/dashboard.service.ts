import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}
  async getDashboardData() {
    const userCount = await this.prisma.utilisateur.count();
    const materialCount = await this.prisma.materiel.count();
    const admin = await this.prisma.utilisateur.findFirst({
        where: { roleUtilisateur: 'ADMINISTRATEUR' }
    });

    return {
        userCount,
        materialCount,
        adminName: admin ? admin.fullName : 'No Admin Found'
    };
}

  create(createDashboardDto: CreateDashboardDto) {
    return 'This action adds a new dashboard';
  }

  findAll() {
    return `This action returns all dashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboard`;
  }

  update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return `This action updates a #${id} dashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboard`;
  }
}
