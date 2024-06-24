import { Injectable } from '@nestjs/common';
import { CreateLogicielDto } from './dto/create-logiciel.dto';
import { UpdateLogicielDto } from './dto/update-logiciel.dto';

@Injectable()
export class LogicielsService {
  create(createLogicielDto: CreateLogicielDto) {
    return 'This action adds a new logiciel';
  }

  findAll() {
    return `This action returns all logiciels`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logiciel`;
  }

  update(id: number, updateLogicielDto: UpdateLogicielDto) {
    return `This action updates a #${id} logiciel`;
  }

  remove(id: number) {
    return `This action removes a #${id} logiciel`;
  }
}
