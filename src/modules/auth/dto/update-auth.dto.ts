import { PartialType } from '@nestjs/mapped-types';
import { CreateUtilisateurDto } from 'src/modules/utilisateur/dto/create-utilisateur.dto';

export class UpdateAuthDto extends PartialType(CreateUtilisateurDto) {}
