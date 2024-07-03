import { Injectable } from '@nestjs/common';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { UpdateSignatureDto } from './dto/update-signature.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SignatureService {
  constructor(private readonly prisma: PrismaService) { }

  create(createSignatureDto: CreateSignatureDto) {
    return this.prisma.signature.create({
      data: createSignatureDto
    });
  }

  findAll() {
    return this.prisma.signature.findMany();
  }

  findOne(idSignature: number) {
    return this.prisma.signature.findUnique({
      where: { idSignature }
    })
  }

  update(idSignature: number, updateSignatureDto: UpdateSignatureDto) {
    return this.prisma.signature.update({
      where: { idSignature },
      data: updateSignatureDto
    })
  }

  remove(idSignature: number) {
    return this.prisma.signature.delete({
      where: { idSignature }
    })
  }
}
