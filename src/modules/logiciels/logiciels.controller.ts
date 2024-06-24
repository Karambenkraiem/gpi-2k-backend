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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logicielsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogicielDto: UpdateLogicielDto) {
    return this.logicielsService.update(+id, updateLogicielDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logicielsService.remove(+id);
  }
}
