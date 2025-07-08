/*
  Warnings:

  - The primary key for the `Medico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PAdministrativo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "Empleado_idDepartamento_idEmpleado_key";

-- AlterTable
ALTER TABLE "Medico" DROP CONSTRAINT "Medico_pkey",
ADD COLUMN     "idMedico" SERIAL NOT NULL,
ADD CONSTRAINT "Medico_pkey" PRIMARY KEY ("idMedico");

-- AlterTable
ALTER TABLE "PAdministrativo" DROP CONSTRAINT "PAdministrativo_pkey",
ADD COLUMN     "idPAdministrativo" SERIAL NOT NULL,
ADD CONSTRAINT "PAdministrativo_pkey" PRIMARY KEY ("idPAdministrativo");

-- CreateTable
CREATE TABLE "Equipamiento" (
    "idEquipamiento" SERIAL NOT NULL,
    "idDepartamento" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'D',
    "FContratacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipamiento_pkey" PRIMARY KEY ("idEquipamiento")
);

-- CreateTable
CREATE TABLE "Medico_Equipo" (
    "idMedico" INTEGER NOT NULL,
    "idEquipamiento" INTEGER NOT NULL,
    "FPrestamo" TIMESTAMP(3) NOT NULL,
    "FDevolucion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medico_Equipo_pkey" PRIMARY KEY ("idMedico","idEquipamiento")
);

-- CreateTable
CREATE TABLE "Cita" (
    "idCita" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "idMedico" INTEGER NOT NULL,
    "fechaYHora" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'R',
    "resumen" TEXT NOT NULL,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("idCita")
);

-- CreateTable
CREATE TABLE "PAdmin_Modifica_Paciente" (
    "idPAdministrativo" INTEGER NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "FModificacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "PAdmin_Modifica_Paciente_pkey" PRIMARY KEY ("idPAdministrativo","idPaciente")
);

-- CreateTable
CREATE TABLE "Actualizaciones_HistoriaClinica" (
    "idMedico" INTEGER NOT NULL,
    "idCita" INTEGER NOT NULL,
    "idHistoriaClinica" INTEGER NOT NULL,
    "FActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Actualizaciones_HistoriaClinica_pkey" PRIMARY KEY ("idMedico","idCita","idHistoriaClinica")
);

-- CreateTable
CREATE TABLE "Medico_Preescribe_Medicamento" (
    "idMedico" INTEGER NOT NULL,
    "idCita" INTEGER NOT NULL,
    "idMedicamento" INTEGER NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "posologia" TEXT NOT NULL,
    "particular" TEXT NOT NULL DEFAULT 'N',

    CONSTRAINT "Medico_Preescribe_Medicamento_pkey" PRIMARY KEY ("idMedico","idCita","idMedicamento","idPaciente")
);

-- CreateTable
CREATE TABLE "Registro_Consulta_Medicamento" (
    "idMedico" INTEGER NOT NULL,
    "idMedicamento" INTEGER NOT NULL,
    "FConsulta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registro_Consulta_Medicamento_pkey" PRIMARY KEY ("idMedico","idMedicamento")
);

-- CreateTable
CREATE TABLE "PAdmin_Gestiona_Cita" (
    "idPAdministrativo" INTEGER NOT NULL,
    "idCita" INTEGER NOT NULL,
    "accion" TEXT NOT NULL DEFAULT 'A',
    "FAccion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PAdmin_Gestiona_Cita_pkey" PRIMARY KEY ("idPAdministrativo","idCita")
);

-- AddForeignKey
ALTER TABLE "Medico_Equipo" ADD CONSTRAINT "Medico_Equipo_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico_Equipo" ADD CONSTRAINT "Medico_Equipo_idEquipamiento_fkey" FOREIGN KEY ("idEquipamiento") REFERENCES "Equipamiento"("idEquipamiento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAdmin_Modifica_Paciente" ADD CONSTRAINT "PAdmin_Modifica_Paciente_idPAdministrativo_fkey" FOREIGN KEY ("idPAdministrativo") REFERENCES "PAdministrativo"("idPAdministrativo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actualizaciones_HistoriaClinica" ADD CONSTRAINT "Actualizaciones_HistoriaClinica_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actualizaciones_HistoriaClinica" ADD CONSTRAINT "Actualizaciones_HistoriaClinica_idCita_fkey" FOREIGN KEY ("idCita") REFERENCES "Cita"("idCita") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico_Preescribe_Medicamento" ADD CONSTRAINT "Medico_Preescribe_Medicamento_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico_Preescribe_Medicamento" ADD CONSTRAINT "Medico_Preescribe_Medicamento_idCita_fkey" FOREIGN KEY ("idCita") REFERENCES "Cita"("idCita") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro_Consulta_Medicamento" ADD CONSTRAINT "Registro_Consulta_Medicamento_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAdmin_Gestiona_Cita" ADD CONSTRAINT "PAdmin_Gestiona_Cita_idPAdministrativo_fkey" FOREIGN KEY ("idPAdministrativo") REFERENCES "PAdministrativo"("idPAdministrativo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAdmin_Gestiona_Cita" ADD CONSTRAINT "PAdmin_Gestiona_Cita_idCita_fkey" FOREIGN KEY ("idCita") REFERENCES "Cita"("idCita") ON DELETE RESTRICT ON UPDATE CASCADE;
