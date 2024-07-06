import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { IncidentService } from './incident.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('incident')
export class IncidentController {
  constructor(private readonly incidentService: IncidentService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createIncidentDto: CreateIncidentDto, @Request() req: any) {
    console.log(req.user);

    return this.incidentService.create(
      createIncidentDto,
      req?.user?.idUtilisateur,
    );
  }

  @Get()
  findAll() {
    return this.incidentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/encours/incidents')
  findEncous(@Request() req: any) {
    return this.incidentService.findIncidentsEnCours(req.user.idUtilisateur);
  }

  @Get('/clotures/incidents/:id')
  findArchives(@Param('id') id: string) {
    return this.incidentService.findIncidentsClotures(+id);
  }

  @Get('/encours/incidents/all')
  findAllEncous() {
    return this.incidentService.findAllIncidentsEnCours();
  }

  @Get('/clotures/incidents/all')
  findAllArchives() {
    return this.incidentService.findAllIncidentsClotures();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncidentDto: UpdateIncidentDto,
  ) {
    return this.incidentService.update(+id, updateIncidentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentService.remove(+id);
  }
}
