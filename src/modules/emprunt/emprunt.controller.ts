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

  @Get(':idEmprunt')
  async findOne(
    @Param('idEmprunt') idEmprunt: string,
  ) {
    return this.empruntService.findOne(+idEmprunt);
  }

  @Get(':idUtilisateur/:numeroSerie')
  async findMany(
    @Param('idUtilisateur') idUtilisateur: string,
    @Param('numeroSerie') numeroSerie: string,
  ) {
    return this.empruntService.findUserMatEmprunt(+idUtilisateur, numeroSerie);
  }

  @Patch(':idEmprunt')
  update(
    @Param('idEmprunt') idEmprunt: string,
    @Body() updateEmpruntDto: UpdateEmpruntDto,
  ) {
    return this.empruntService.update(
      +idEmprunt,
      updateEmpruntDto,
    );
  }


  @Delete(':idEmprunt')
  remove(
    @Param('idEmprunt') idEmprunt: string,
  ) {
    return this.empruntService.remove(+idEmprunt);
  }
}
