import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from './create-utilisateur.dto';
import { $Enums, Prisma } from '@prisma/client';

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {}
