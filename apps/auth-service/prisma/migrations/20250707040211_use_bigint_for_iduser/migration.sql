/*
  Warnings:

  - The primary key for the `TelUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "PasswordResetToken" DROP CONSTRAINT "PasswordResetToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "TelUser" DROP CONSTRAINT "TelUser_idUser_fkey";

-- AlterTable
ALTER TABLE "PasswordResetToken" ALTER COLUMN "userId" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "TelUser" DROP CONSTRAINT "TelUser_pkey",
ALTER COLUMN "idUser" SET DATA TYPE BIGINT,
ADD CONSTRAINT "TelUser_pkey" PRIMARY KEY ("idUser", "telephone");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "idUser" SET DATA TYPE BIGINT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("idUser");

-- AddForeignKey
ALTER TABLE "TelUser" ADD CONSTRAINT "TelUser_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordResetToken" ADD CONSTRAINT "PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE CASCADE ON UPDATE CASCADE;
