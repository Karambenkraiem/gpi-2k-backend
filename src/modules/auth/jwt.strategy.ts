import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'gpi karam khayreddine ',
    });
  }
  async validate(payload: any) {
    //payload is the decoded token=> the data before hashing

    const user = await this.prisma.utilisateur.findUnique({
      where: {
        idUtilisateur: payload.idUtilisateur,
      },
    });
    if (!user) {
      throw new HttpException('invalid token', HttpStatus.UNAUTHORIZED);
    } else {
      return user;
    }
  }
}
