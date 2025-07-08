-- CreateTable
CREATE TABLE "Paciente" (
    "idUsuario" INTEGER NOT NULL,
    "idPAdministrativo" INTEGER NOT NULL,
    "baseDepartamento" TEXT NOT NULL,
    "idPaciente" SERIAL NOT NULL,
    "idHistoriaClinica" INTEGER,
    "FAfiliacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Estado" TEXT NOT NULL DEFAULT 'A',

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("idPaciente")
);

-- CreateTable
CREATE TABLE "HistoriaClinica" (
    "idHistoriaClinica" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "FInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HistoriaClinica_pkey" PRIMARY KEY ("idHistoriaClinica")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_idHistoriaClinica_key" ON "Paciente"("idHistoriaClinica");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_idUsuario_idPaciente_key" ON "Paciente"("idUsuario", "idPaciente");

-- CreateIndex
CREATE UNIQUE INDEX "HistoriaClinica_idPaciente_key" ON "HistoriaClinica"("idPaciente");

-- AddForeignKey
ALTER TABLE "HistoriaClinica" ADD CONSTRAINT "HistoriaClinica_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente"("idPaciente") ON DELETE RESTRICT ON UPDATE CASCADE;
