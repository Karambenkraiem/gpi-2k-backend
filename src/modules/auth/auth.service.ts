import { BadRequestException, Injectable } from '@nestjs/common';
import { ChangePasswordDto, LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private jwtService: JwtService,) { }

  async login(dto: LoginDto) {
    const user = await this.prisma.utilisateur.findUnique({
      where: { idUtilisateur: dto.idUtilisateur },
      include: { Specialite: { include: { Departement: true } } }
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
  async changePassword(id: number, dto: ChangePasswordDto) {
    const user = await this.prisma.utilisateur.findUnique({
      where: { idUtilisateur: id },
      include: { Specialite: { include: { Departement: true } } }
    });
    if (!user) {
      throw new BadRequestException('wrong idUilistateur');
    }
    const { password, ...rest } = user;
    const resultCompare = await bcrypt.compare(dto.password, password);
    if (!resultCompare) {
      throw new BadRequestException('wrong old password');
    }
    if (dto.newPassword !== dto.newPasswordConfirm)
      throw new BadRequestException('new password and confirm new password are not matched');
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(dto.newPassword, salt)

    await this.prisma.utilisateur.update({
      where: {
        idUtilisateur: user.idUtilisateur,
      }, data: { password: hashedPassword }
    });
    return 'password was accepted'


  }


  getMyInfo(user: any) {
    delete user.password;
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return user
  }



  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const user = await this.prisma.utilisateur.update({ where: { idUtilisateur: id }, data: updateAuthDto, include: { Specialite: { include: { Departement: true } } } });
    const { password, ...rest } = user;
    console.log('====================================');
    console.log(rest);
    console.log('====================================');
    return await this.jwtService.signAsync(rest);
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
