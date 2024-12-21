/*
  Warnings:

  - Changed the type of `buymin` on the `coupon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "coupon" DROP COLUMN "buymin",
ADD COLUMN     "buymin" INTEGER NOT NULL;
