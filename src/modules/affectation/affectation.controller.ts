import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AffectationService } from './affectation.service';
import { CreateAffectationDto } from './dto/create-affectation.dto';
import { UpdateAffectationDto } from './dto/update-affectation.dto';

@Controller('affectation')
export class AffectationController {
  constructor(private readonly affectationService: AffectationService) { }

  @Post()
  create(@Body() createAffectationDto: CreateAffectationDto) {
    return this.affectationService.create(createAffectationDto);
  }

  @Get()
  findAll() {
    return this.affectationService.findAll();
  }


  @Get(':idUtilisateur/:numeroSerie')
  async findOne(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string,
  ) {
    return this.affectationService.findOne(+(idUtilisateur), numeroSerie);
  }


  @Patch(':idUtilisateur/:numeroSerie')
  update(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string,
    @Body() updateAffectationDto: UpdateAffectationDto) {
    return this.affectationService.update(+(idUtilisateur), numeroSerie, updateAffectationDto);
  }

  @Delete(':idUtilisateur/:numeroSerie')
  remove(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string) {
    return this.affectationService.remove(+(idUtilisateur), numeroSerie);
  }




}
