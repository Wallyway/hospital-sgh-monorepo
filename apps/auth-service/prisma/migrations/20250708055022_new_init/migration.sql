/*
  Warnings:

  - You are about to drop the column `userId` on the `PasswordResetToken` table. All the data in the column will be lost.
  - You are about to drop the `TelUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[usuarioId]` on the table `PasswordResetToken` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioId` to the `PasswordResetToken` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PasswordResetToken" DROP CONSTRAINT "PasswordResetToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "TelUser" DROP CONSTRAINT "TelUser_idUser_fkey";

-- DropIndex
DROP INDEX "PasswordResetToken_userId_key";

-- AlterTable
ALTER TABLE "PasswordResetToken" DROP COLUMN "userId",
ADD COLUMN     "usuarioId" BIGINT NOT NULL;

-- DropTable
DROP TABLE "TelUser";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" BIGINT NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "direccion" VARCHAR(100) NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "TelUsuario" (
    "idUsuario" BIGINT NOT NULL,
    "telefono" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TelUsuario_pkey" PRIMARY KEY ("idUsuario","telefono")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_usuarioId_key" ON "PasswordResetToken"("usuarioId");

-- AddForeignKey
ALTER TABLE "TelUsuario" ADD CONSTRAINT "TelUsuario_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("idUsuario") ON DELETE CASCADE ON UPDATE CASCADE;
