import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentService } from './incident.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';

@Controller('incident')
export class IncidentController {
  constructor(private readonly incidentService: IncidentService) {}

  @Post()
  create(@Body() createIncidentDto: CreateIncidentDto) {
    return this.incidentService.create(createIncidentDto);
  }

  @Get()
  findAll() {
    return this.incidentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentService.findOne(+id);
  }

  @Get('/encours/incidents/:id')
  findEncous(@Param('id') id: string){
    return this.incidentService.findIncidentsEnCours(+id);
  }

  @Get('/clotures/incidents/:id') 
  findArchives(@Param('id') id: string){
    return this.incidentService.findIncidentsClotures(+id);
  }

  @Get('/encours/incidents/all')
  findAllEncous(){
    return this.incidentService.findAllIncidentsEnCours();
  }

  @Get('/clotures/incidents/all') 
  findAllArchives(){
    return this.incidentService.findAllIncidentsClotures();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidentDto: UpdateIncidentDto) {
    return this.incidentService.update(+id, updateIncidentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentService.remove(+id);
  }
}
