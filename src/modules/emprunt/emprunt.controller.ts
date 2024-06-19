import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpruntService } from './emprunt.service';
import { CreateEmpruntDto } from './dto/create-emprunt.dto';
import { UpdateEmpruntDto } from './dto/update-emprunt.dto';

@Controller('emprunt')
export class EmpruntController {
  constructor(private readonly empruntService: EmpruntService) {}

  @Post()
  create(@Body() createEmpruntDto: CreateEmpruntDto) {
    return this.empruntService.create(createEmpruntDto);
  }

  @Get()
  findAll() {
    return this.empruntService.findAll();
  }

  @Get('/:numeroSerie')
  findEmprunts(@Param('numeroSerie') numeroSerie: string,){
    return this.empruntService.findMaterialEmprunts(numeroSerie);
  }

  @Get(':idUtilisateur/:numeroSerie')
  async findOne(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string,
  ) {
    return this.empruntService.findOne(+idUtilisateur, numeroSerie);
  }


  @Patch(':idUtilisateur/:numeroSerie')
  update(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string,
    @Body() updateEmpruntDto: UpdateEmpruntDto,
  ) {
    return this.empruntService.update(
      +idUtilisateur,
      numeroSerie,
      updateEmpruntDto,
    );
  }


  @Delete(':idUtilisateur/:numeroSerie')
  remove(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string,
  ) {
    return this.empruntService.remove(+idUtilisateur, numeroSerie);
  }
}
