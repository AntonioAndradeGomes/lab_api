/*
  Warnings:

  - You are about to drop the `Exam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Laboratory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Exam";

-- DropTable
DROP TABLE "Laboratory";

-- CreateTable
CREATE TABLE "laboratories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "status" "State" NOT NULL DEFAULT E'ACTIVE',

    CONSTRAINT "laboratories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams" (
    "id" TEXT NOT NULL,
    "type" "ExamType" NOT NULL,
    "status" "State" NOT NULL DEFAULT E'ACTIVE',
    "name" TEXT NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);
