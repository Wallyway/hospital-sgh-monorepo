-- CreateTable
CREATE TABLE "Empleado" (
    "idEmpleado" SERIAL NOT NULL,
    "idUsuario" BIGINT NOT NULL,
    "idDepartamento" INTEGER NOT NULL,
    "FContratacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" TEXT NOT NULL DEFAULT 'V',

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("idEmpleado")
);

-- CreateTable
CREATE TABLE "Medico" (
    "idEmpleado" INTEGER NOT NULL,
    "sueldo" INTEGER NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("idEmpleado")
);

-- CreateTable
CREATE TABLE "PAdministrativo" (
    "idEmpleado" INTEGER NOT NULL,
    "sueldo" INTEGER NOT NULL,

    CONSTRAINT "PAdministrativo_pkey" PRIMARY KEY ("idEmpleado")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_idDepartamento_idEmpleado_key" ON "Empleado"("idDepartamento", "idEmpleado");

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAdministrativo" ADD CONSTRAINT "PAdministrativo_idEmpleado_fkey" FOREIGN KEY ("idEmpleado") REFERENCES "Empleado"("idEmpleado") ON DELETE RESTRICT ON UPDATE CASCADE;
