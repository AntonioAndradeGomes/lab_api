import { ExamType, State } from "@prisma/client";
import { AppError } from "../../../config/errors/AppError";
import prismaClient from "../../../prisma/prisma";

interface IRequest {
  id: string;
  name: string;
  type: string;
  status: string;
}

class UpdateExamService {
  async execute({ id, name, type, status }: IRequest) {
    const tyoeExists = ["CLINICAL_ANALYSIS", "IMAGE"].find(
      (element) => element == type.toUpperCase()
    );
    if (!tyoeExists) {
      throw new AppError("There is no such exam.");
    }
    const statusExists = ["ACTIVE", "INACTIVE"].find(
      (element) => element == status.toUpperCase()
    );
    if (!statusExists) {
      throw new AppError("Non-existent exam status");
    }
    let exam = await prismaClient.exam.findUnique({ where: { id } });
    if (!exam) {
      throw new AppError("Exam does not exist");
    }
    exam = await prismaClient.exam.update({
      where: { id },
      data: { name, type: ExamType[type.toUpperCase()], status: State[status.toUpperCase()] },
    });
    return exam;
  }
}

export { UpdateExamService };
