-- CreateTable
CREATE TABLE "Diagnostico" (
    "idDiagnostico" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Diagnostico_pkey" PRIMARY KEY ("idDiagnostico")
);

-- CreateTable
CREATE TABLE "Medico_dictamina_diagnostico" (
    "idDiagnostico" INTEGER NOT NULL,
    "idMedico" INTEGER NOT NULL,
    "idCita" INTEGER NOT NULL,

    CONSTRAINT "Medico_dictamina_diagnostico_pkey" PRIMARY KEY ("idDiagnostico","idMedico","idCita")
);

-- CreateIndex
CREATE UNIQUE INDEX "Diagnostico_nombre_key" ON "Diagnostico"("nombre");

-- AddForeignKey
ALTER TABLE "Medico_dictamina_diagnostico" ADD CONSTRAINT "Medico_dictamina_diagnostico_idDiagnostico_fkey" FOREIGN KEY ("idDiagnostico") REFERENCES "Diagnostico"("idDiagnostico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico_dictamina_diagnostico" ADD CONSTRAINT "Medico_dictamina_diagnostico_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico"("idMedico") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico_dictamina_diagnostico" ADD CONSTRAINT "Medico_dictamina_diagnostico_idCita_fkey" FOREIGN KEY ("idCita") REFERENCES "Cita"("idCita") ON DELETE RESTRICT ON UPDATE CASCADE;
