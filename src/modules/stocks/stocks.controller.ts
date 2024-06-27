import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stocksService.findAll();
  }

  @Get(':refArt')
  findOne(@Param('refArt') refArt: string) {
    return this.stocksService.findOne(refArt);
  }

  @Patch(':refArt')
  update(
    @Param('refArt') reafArt: string,
    @Body() updateStockDto: UpdateStockDto,
  ) {
    return this.stocksService.update(reafArt, updateStockDto);
  }

  @Delete(':reafArt')
  remove(@Param('reafArt') reafArt: string) {
    return this.stocksService.remove(reafArt);
  }
}
