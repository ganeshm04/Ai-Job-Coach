/*
  Warnings:

  - You are about to drop the column `recommendationSkills` on the `IndustryInsight` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "recommendationSkills",
ADD COLUMN     "recommendedSkills" TEXT[];
