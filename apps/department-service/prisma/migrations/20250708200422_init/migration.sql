-- CreateTable
CREATE TABLE "Departamento" (
    "idDepartamento" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Ubicacion" TEXT NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("idDepartamento")
);

-- CreateIndex
CREATE UNIQUE INDEX "Departamento_Nombre_key" ON "Departamento"("Nombre");
