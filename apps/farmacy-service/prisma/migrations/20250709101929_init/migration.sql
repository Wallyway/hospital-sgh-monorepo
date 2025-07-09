-- CreateTable
CREATE TABLE "Farmacia" (
    "idFarmacia" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "Farmacia_pkey" PRIMARY KEY ("idFarmacia")
);

-- CreateTable
CREATE TABLE "Medicamento" (
    "idMedicamento" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Medicamento_pkey" PRIMARY KEY ("idMedicamento")
);

-- CreateTable
CREATE TABLE "FarmaciaPosee" (
    "idFarmacia" INTEGER NOT NULL,
    "idMedicamento" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "FarmaciaPosee_pkey" PRIMARY KEY ("idFarmacia","idMedicamento")
);

-- CreateTable
CREATE TABLE "FarmaciaEntrega" (
    "idPaciente" INTEGER NOT NULL,
    "idFarmacia" INTEGER NOT NULL,
    "idMedicamento" INTEGER NOT NULL,
    "FEntrega" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Cantidad" INTEGER NOT NULL,

    CONSTRAINT "FarmaciaEntrega_pkey" PRIMARY KEY ("idPaciente","idFarmacia","idMedicamento","FEntrega")
);

-- CreateIndex
CREATE UNIQUE INDEX "Farmacia_nombre_key" ON "Farmacia"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Farmacia_direccion_key" ON "Farmacia"("direccion");

-- CreateIndex
CREATE UNIQUE INDEX "Medicamento_nombre_key" ON "Medicamento"("nombre");

-- AddForeignKey
ALTER TABLE "FarmaciaPosee" ADD CONSTRAINT "FarmaciaPosee_idFarmacia_fkey" FOREIGN KEY ("idFarmacia") REFERENCES "Farmacia"("idFarmacia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarmaciaPosee" ADD CONSTRAINT "FarmaciaPosee_idMedicamento_fkey" FOREIGN KEY ("idMedicamento") REFERENCES "Medicamento"("idMedicamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarmaciaEntrega" ADD CONSTRAINT "FarmaciaEntrega_idFarmacia_fkey" FOREIGN KEY ("idFarmacia") REFERENCES "Farmacia"("idFarmacia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarmaciaEntrega" ADD CONSTRAINT "FarmaciaEntrega_idMedicamento_fkey" FOREIGN KEY ("idMedicamento") REFERENCES "Medicamento"("idMedicamento") ON DELETE RESTRICT ON UPDATE CASCADE;
