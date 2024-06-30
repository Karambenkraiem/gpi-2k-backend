import {  Controller,  Get,  Post,  Body,  Patch,  Param,  Delete,} from '@nestjs/common';
import { MaterielService } from './materiel.service';
import { CreateMaterielDto } from './dto/create-materiel.dto';
import { UpdateMaterielDto } from './dto/update-materiel.dto';

@Controller('materiel')
export class MaterielController {
  constructor(private readonly materielService: MaterielService) { }

  @Post()
  create(@Body() createMaterielDto: CreateMaterielDto) {
    return this.materielService.create(createMaterielDto);
  }

  @Get()
  findAll() {
    return this.materielService.findAll();
  }

  @Get('pc')
  findOrdinateur() {
      return this.materielService.findUCPC();
  }
  
  

  @Get(':numeroSerie')
  findOne(@Param('numeroSerie') numeroSerie: string) {
    return this.materielService.findOne(numeroSerie);
  }

  @Patch(':numeroSerie')
  update(
    @Param('numeroSerie') numeroSerie: string,
    @Body() updateMaterielDto: UpdateMaterielDto,
  ) {
    return this.materielService.update(numeroSerie, updateMaterielDto);
  }

  // @Delete(':numeroSerie')
  // remove(@Param('numeroSerie') numeroSerie: string) {
  //   return this.materielService.remove(numeroSerie);
  // }
}
