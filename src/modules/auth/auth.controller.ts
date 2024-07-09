import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ChangePasswordDto, LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Utilisateur } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  create(@Body() createAuthDto: LoginDto) {
    return this.authService.login(createAuthDto);
  }
  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  chnagePassword(@Request() req: any,@Body() createAuthDto: ChangePasswordDto) {
    return this.authService.changePassword(req.user.idUtilisateur,createAuthDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('my-info')
  getMyInfo(@Request() req: any) {
    return this.authService.getMyInfo(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update-info')
  update(@Request() req: any, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(req.user.idUtilisateur, updateAuthDto);
  }
}
