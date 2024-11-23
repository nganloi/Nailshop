/*
  Warnings:

  - You are about to drop the column `userid` on the `blog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "blog" DROP CONSTRAINT "blog_userid_fkey";

-- AlterTable
ALTER TABLE "blog" DROP COLUMN "userid";
