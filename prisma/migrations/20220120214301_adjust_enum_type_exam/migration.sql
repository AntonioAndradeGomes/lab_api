/*
  Warnings:

  - The values [Clinical_ANALYSIS] on the enum `ExamType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExamType_new" AS ENUM ('CLINICAL_ANALYSIS', 'IMAGE');
ALTER TABLE "exams" ALTER COLUMN "type" TYPE "ExamType_new" USING ("type"::text::"ExamType_new");
ALTER TYPE "ExamType" RENAME TO "ExamType_old";
ALTER TYPE "ExamType_new" RENAME TO "ExamType";
DROP TYPE "ExamType_old";
COMMIT;
