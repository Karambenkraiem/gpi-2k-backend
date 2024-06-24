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

  @Patch(':idSociete/:refArt')
  update(
    @Param('idSociete') idSociete: string,
    @Param('refArt') refArt: string,
    @Body() updateAlimentationDto: UpdateAlimentationDto,
  ) {
    return this.alimentationService.update(
      +idSociete,
      refArt,
      updateAlimentationDto,
    );
  }


 @Delete(':idSociete/:refArt')
  remove(
    @Param('idSociete') idSociete: string,
    @Param('refArt') refArt: string,
  ) {
    return this.alimentationService.remove(+idSociete, refArt);
  }
}
