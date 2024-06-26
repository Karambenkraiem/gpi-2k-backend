import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogicielsService } from './logiciels.service';
import { CreateLogicielDto } from './dto/create-logiciel.dto';
import { UpdateLogicielDto } from './dto/update-logiciel.dto';

@Controller('logiciels')
export class LogicielsController {
  constructor(private readonly logicielsService: LogicielsService) {}

  @Post()
  create(@Body() createLogicielDto: CreateLogicielDto) {
    return this.logicielsService.create(createLogicielDto);
  }

  @Get()
  findAll() {
    return this.logicielsService.findAll();
  }

  @Get(':idLogiciel')
  findOne(@Param('idLogiciel') idLogiciel: string) {
    return this.logicielsService.findOne(+idLogiciel);
  }

  @Patch(':idLogiciel')
  update(@Param('idLogiciel') idLogiciel: string, @Body() updateLogicielDto: UpdateLogicielDto) {
    return this.logicielsService.update(+idLogiciel, updateLogicielDto);
  }

  @Delete(':idLogiciel')
  remove(@Param('idLogiciel') idLogiciel: string) {
    return this.logicielsService.remove(+idLogiciel);
  }
}
