import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AffectationService } from './affectation.service';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';
import { Filter } from './entities/affectation.entity';

@Controller('affectation')
export class AffectationController {
  constructor(private readonly affectationService: AffectationService) {}

  @Post()
  create(@Body() createAffectationDto: CreateAffectationDto) {
    return this.affectationService.create(createAffectationDto);
  }

  @Get()
  findAll() {
    return this.affectationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.affectationService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAffectationDto: UpdateAffectationDto) {
    return this.affectationService.update(id, updateAffectationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.affectationService.remove(id);
  }

  // @Get(':idUtilisateur/:numeroSerie')
  // async findOne(
  //   @Param('idUtilisateur') idUtilisateur: number,
  //   @Param('numeroSerie') numeroSerie: string,
  // ){
  //   return this.affectationService.findOne(idUtilisateur, numeroSerie);
  // }

  @Get()
  findOne(@Query() filter:Filter) {  
    return this.affectationService.findAll(filter.idUtilisateur, filter.numeroSerie);
  }
}
