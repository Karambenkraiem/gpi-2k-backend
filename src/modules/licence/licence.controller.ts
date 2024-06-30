import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicenceService } from './licence.service';
import { CreateLicenceDto } from './dto/create-licence.dto';
import { UpdateLicenceDto } from './dto/update-licence.dto';

@Controller('licence')
export class LicenceController {
  constructor(private readonly licenceService: LicenceService) {}

  @Post()
  create(@Body() createLicenceDto: CreateLicenceDto) {
    return this.licenceService.create(createLicenceDto);
  }

  @Get()
  findAll() {
    return this.licenceService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.licenceService.findOne(+id);
  // }

  @Get('/:idLogiciel')
    findLicences(@Param('idLogiciel') idLogiciel: string) {
    return this.licenceService.findLogiciel(+idLogiciel);
  }

  @Patch(':idLicence')
  update(@Param('idLicence') idLicence: string, @Body() updateLicenceDto: UpdateLicenceDto) {
    return this.licenceService.update(+idLicence, updateLicenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenceService.remove(+id);
  }
}
