import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AlimentationService } from './alimentation.service';
import { CreateAlimentationDto } from './dto/create-alimentation.dto';
import { UpdateAlimentationDto } from './dto/update-alimentation.dto';

@Controller('alimentation')
export class AlimentationController {
  constructor(private readonly alimentationService: AlimentationService) {}

  @Post()
  create(@Body() createAlimentationDto: CreateAlimentationDto) {
    return this.alimentationService.create(createAlimentationDto);
  }

  @Get()
  findAll() {
    return this.alimentationService.findAll();
  }
 


  @Get('/:refArt')
  findAlimentation(@Param('refArt') refArt: string,){
    return this.alimentationService.findStocksAlimentation(refArt);
  }

  @Get(':idSociete/:refArt')
  findOne(
    @Query('idSociete') idSociete: number,
    @Query('refArt') refArt: string,
  ) {
    return this.alimentationService.findOne(idSociete, refArt);
  }

  @Patch(':idAffectation')
  update(
    @Param('idAffectation') idAffectation: number,
    @Body() updateAlimentationDto: UpdateAlimentationDto,
  ) {
    return this.alimentationService.update(
      +idAffectation,
      updateAlimentationDto,
    );
  }


 @Delete(':idAffectation')
  remove(
    @Param('idAffectation') idAffectation: number,
  ) {
    return this.alimentationService.remove(+idAffectation);
  }
}
