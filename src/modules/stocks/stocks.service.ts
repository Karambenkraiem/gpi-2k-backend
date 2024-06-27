import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StocksService {
  constructor(private prisma: PrismaService) { }

  create(createStockDto: CreateStockDto) {
    return this.prisma.stocks.create({
      data: createStockDto
    });
  }


  findAll() {
    return this.prisma.stocks.findMany({
      include: {
        Alimentation: {
          select: {
            dateAlimentation: true,
            quantiteAlimente: true,
          },
        },
      },
    });
  }

  findOne(refArt: string) {
    return this.prisma.stocks.findUnique({
      where: { refArt },
    });
  }



  update(refArt: string, updateStockDto: UpdateStockDto) {
    const {quantiteStock, ...rest}=updateStockDto;
    return this.prisma.stocks.update({
      where: { refArt },
      data: {
        ...rest,
        quantiteStock: quantiteStock,
      },
      include: {
        Alimentation: true,
      }
    })
  }

  
  async remove(refArt: string) {
    await this.prisma.alimentation.deleteMany({
      where: { refArt },
    });    

    // Proceed with the delete operation for the Materiel record
    return this.prisma.stocks.delete({
      where: { refArt },
    });
  }
}
