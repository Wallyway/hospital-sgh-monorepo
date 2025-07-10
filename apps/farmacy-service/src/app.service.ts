import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getMedications() {
    const medicamentos = await this.prisma.medicamento.findMany({
      orderBy: {
        nombre: 'asc',
      },
    });
    return medicamentos;
  }
}
