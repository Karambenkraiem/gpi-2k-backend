import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsommationService } from './consommation.service';
import { CreateConsommationDto } from './dto/create-consommation.dto';
import { UpdateConsommationDto } from './dto/update-consommation.dto';

@Controller('consommation')
export class ConsommationController {
  constructor(private readonly consommationService: ConsommationService) {}

  @Post()
  create(@Body() createConsommationDto: CreateConsommationDto) {
    return this.consommationService.create(createConsommationDto);
  }

  @Get()
  findAll() {
    return this.consommationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consommationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsommationDto: UpdateConsommationDto) {
    return this.consommationService.update(+id, updateConsommationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consommationService.remove(+id);
  }
}
