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
  findOne(@Param('id') id: string) {
    return this.societeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocieteDto: UpdateSocieteDto) {
    return this.societeService.update(+id, updateSocieteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.societeService.remove(+id);
  }
}
