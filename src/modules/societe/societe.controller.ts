import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SocieteService } from './societe.service';
import { CreateSocieteDto } from './dto/create-societe.dto';
import { UpdateSocieteDto } from './dto/update-societe.dto';
import { Filter } from './entities/societe.entity';

@Controller('societe')
export class SocieteController {
  constructor(private readonly societeService: SocieteService) {}

  @Post()
  create(@Body() createSocieteDto: CreateSocieteDto) {
    return this.societeService.create(createSocieteDto);
  }

  @Get()
  // findAll(@Query() filter:Filter) {  
    findAll() {   
    // return this.societeService.findAll(filter.adresse,filter.numtel);
    return this.societeService.findAll();
  }
  

  @Get(':id')
  findOne(@Param('id') idSociete: string) {
    return this.societeService.findOne(+idSociete);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocieteDto: UpdateSocieteDto) {
    return this.societeService.update(+id, updateSocieteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.societeService.remove(+id);
  }

////////////////////////////////////////////
@Get(':idSociete/materiels')
  async getMateriels(@Param('idSociete') idSociete: string) {
    return this.societeService.findMaterielsForSociete(+idSociete);
  }

  @Get(':idSociete/alimentations')
  async getAlimentations(@Param('idSociete') idSociete: string) {
    return this.societeService.findAlimentationsForSociete(+idSociete);
  }

  @Get(':idSociete/logiciel')
  async getLogiciel(@Param('idSociete') idSociete: string) {
    return this.societeService.findLogicielForSociete(+idSociete);
  }




}
