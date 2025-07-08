import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class DepartmentService {
    constructor(private prisma: PrismaService) { }

    async create(Nombre: string, Ubicacion: string) {
        return this.prisma.departamento.create({
            data: { Nombre, Ubicacion },
        });
    }

    async findAll() {
        return this.prisma.departamento.findMany();
    }

    async findById(id: number) {
        return this.prisma.departamento.findUnique({
            where: { idDepartamento: id },
        });
    }

    async findByName(Nombre: string) {
        return this.prisma.departamento.findUnique({ where: { Nombre } });
    }
}
