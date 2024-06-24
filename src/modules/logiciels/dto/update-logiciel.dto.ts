import { PartialType } from '@nestjs/mapped-types';
import { CreateLogicielDto } from './create-logiciel.dto';

export class UpdateLogicielDto extends PartialType(CreateLogicielDto) {}
