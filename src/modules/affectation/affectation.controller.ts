import {  Controller,  Get,  Post,  Body,  Patch,  Param,  Delete,  Query,} from '@nestjs/common';
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

  @Get('/:numeroSerie')
  findAffectations(@Param('numeroSerie') numeroSerie: string){
    return this.affectationService.findMaterialAffectations(numeroSerie);
  }

  @Get(':idAffectation')
  findOne(
    @Query('idAffectation') idAffectation: number,
  ) {
    return this.affectationService.findOne(idAffectation);
  }

  @Get(':idUtilisateur/:numeroSerie')
  async findMany(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string,
  ) {
    return this.affectationService.findUserMatAffect(+idUtilisateur, numeroSerie);
  }

  @Patch(':idAffectation')
  update(
    @Param('idAffectation') idAffectation: string,
    @Body() updateAffectationDto: UpdateAffectationDto,
  ) {
    return this.affectationService.update(
      +idAffectation,
      updateAffectationDto,
    );
  }

  @Delete(':idAffectation')
  remove(
    @Param('idAffectation') idAffectation: string,
  ) {
    return this.affectationService.remove(+idAffectation);
  }
}
