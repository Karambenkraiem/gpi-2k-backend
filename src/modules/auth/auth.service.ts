import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(dto: LoginDto) {
    const user = await this.prisma.utilisateur.findUnique({
      where: { idUtilisateur: dto.idUtilisateur },
    });
    if (!user) {
      throw new BadRequestException('wrong idUilistateur');
    }
    const { password, ...rest } = user;
    const resultCompare = await bcrypt.compare(dto.password, password);
    if (!resultCompare) {
      throw new BadRequestException('wrong password');
    }
    return await this.jwtService.signAsync(rest);
  }


  getMyInfo(user:any) {
    delete user.password;
    return user
  }



  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
