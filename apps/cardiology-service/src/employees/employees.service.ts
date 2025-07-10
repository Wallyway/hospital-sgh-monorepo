/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async specializeEmployee(payload: any, eventType: string) {
    const { userId, idUser, role, idDepartamento, ...rest } = payload;
    const idUsuario = BigInt(userId || idUser);

    console.log('[CARDIOLOGY SERVICE] ===> INICIO specializeEmployee');
    console.log('[CARDIOLOGY SERVICE] Payload recibido:', JSON.stringify(payload));
    console.log('[CARDIOLOGY SERVICE] idUsuario:', idUsuario.toString(), 'eventType:', eventType, 'idDepartamento:', idDepartamento);

    // 1. Verifica si ya existe un empleado con ese idUsuario
    let empleado;
    try {
      empleado = await this.prisma.empleado.findFirst({
        where: { idUsuario },
      });
      console.log('[CARDIOLOGY SERVICE] Resultado búsqueda empleado:', empleado);
    } catch (error) {
      console.error('[CARDIOLOGY SERVICE] Error buscando empleado:', error);
      throw error;
    }

    if (!empleado) {
      console.log('[CARDIOLOGY SERVICE] No existe empleado, creando nuevo con idDepartamento:', idDepartamento);
      try {
        empleado = await this.prisma.empleado.create({
          data: {
            idUsuario,
            idDepartamento: Number(idDepartamento || 1),
          },
        });
        console.log('[CARDIOLOGY SERVICE] Empleado creado:', empleado);
      } catch (error) {
        console.error('[CARDIOLOGY SERVICE] Error creando empleado:', error);
        throw error;
      }
    } else {
      console.log('[CARDIOLOGY SERVICE] El empleado ya existe:', empleado);
    }

    // 2. Valida especialización incompatible
    let medico, admin;
    try {
      medico = await this.prisma.medico.findFirst({
        where: { idEmpleado: empleado.idEmpleado },
      });
      admin = await this.prisma.pAdministrativo.findFirst({
        where: { idEmpleado: empleado.idEmpleado },
      });
      console.log('[CARDIOLOGY SERVICE] Estado especialización: medico:', medico, 'admin:', admin);
    } catch (error) {
      console.error('[CARDIOLOGY SERVICE] Error buscando especializaciones:', error);
      throw error;
    }

    if (eventType === 'DoctorSpecializationRequested' && admin) {
      console.error('[CARDIOLOGY SERVICE] No puede ser MEDIC y ADMIN a la vez');
      throw new BadRequestException('No puede ser MEDIC y ADMIN a la vez');
    }
    if (eventType === 'AdminSpecializationRequested' && medico) {
      console.error('[CARDIOLOGY SERVICE] No puede ser ADMIN y MEDIC a la vez');
      throw new BadRequestException('No puede ser ADMIN y MEDIC a la vez');
    }
    if (eventType === 'DoctorSpecializationRequested' && medico) {
      console.error('[CARDIOLOGY SERVICE] El usuario ya está especializado como MEDIC');
      throw new BadRequestException('El usuario ya está especializado como MEDIC');
    }
    if (eventType === 'AdminSpecializationRequested' && admin) {
      console.error('[CARDIOLOGY SERVICE] El usuario ya está especializado como ADMIN');
      throw new BadRequestException('El usuario ya está especializado como ADMIN');
    }

    // 3. Especializa
    if (eventType === 'DoctorSpecializationRequested' && !medico) {
      console.log('[CARDIOLOGY SERVICE] Creando especialización MEDIC con sueldo:', rest.sueldo);
      if (typeof rest.sueldo !== 'number' || rest.sueldo <= 0) {
        console.error('[CARDIOLOGY SERVICE] El sueldo es obligatorio y debe ser un número positivo para MEDIC. Valor recibido:', rest.sueldo);
        throw new BadRequestException(
          'El sueldo es obligatorio y debe ser un número positivo para MEDIC.',
        );
      }
      try {
        const medicoCreated = await this.prisma.medico.create({
          data: {
            idEmpleado: empleado.idEmpleado,
            sueldo: BigInt(rest.sueldo),
          },
        });
        console.log('[CARDIOLOGY SERVICE] MEDIC creado:', medicoCreated);
      } catch (error) {
        console.error('[CARDIOLOGY SERVICE] Error creando MEDIC:', error);
        throw error;
      }
    }
    if (eventType === 'AdminSpecializationRequested' && !admin) {
      console.log('[CARDIOLOGY SERVICE] Creando especialización ADMIN con sueldo:', rest.sueldo);
      if (typeof rest.sueldo !== 'number' || rest.sueldo <= 0) {
        console.error('[CARDIOLOGY SERVICE] El sueldo es obligatorio y debe ser un número positivo para ADMIN. Valor recibido:', rest.sueldo);
        throw new BadRequestException(
          'El sueldo es obligatorio y debe ser un número positivo para ADMIN.',
        );
      }
      try {
        const adminCreated = await this.prisma.pAdministrativo.create({
          data: {
            idEmpleado: empleado.idEmpleado,
            sueldo: BigInt(rest.sueldo),
          },
        });
        console.log('[CARDIOLOGY SERVICE] ADMIN creado:', adminCreated);
      } catch (error) {
        console.error('[CARDIOLOGY SERVICE] Error creando ADMIN:', error);
        throw error;
      }
    }
    console.log('[CARDIOLOGY SERVICE] ===> FIN specializeEmployee');
  }

  async getUserRoles(idUsuario: bigint): Promise<string[]> {
    const empleado = await this.prisma.empleado.findFirst({
      where: { idUsuario },
      include: { medico: true, pAdministrativo: true },
    });
    const roles: string[] = [];
    if (empleado?.medico?.length) roles.push('MEDIC');
    if (empleado?.pAdministrativo?.length) roles.push('ADMIN');
    return roles;
  }
}
