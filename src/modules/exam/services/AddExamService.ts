import { ExamType } from "@prisma/client";
import { AppError } from "../../../config/errors/AppError";
import prismaClient from "../../../prisma/prisma";

interface IRequest {
  name: string;
  type: string;
}

class AddExamService {
  async execute({ name, type }: IRequest) {
    const tyoeExists = ["CLINICAL_ANALYSIS", "IMAGE"].find(
      (element) => element == type.toUpperCase()
    );

    if (!tyoeExists) {
      throw new AppError("There is no such exam.");
    }
    
    const exam = await prismaClient.exam.create({
      data: { name, type: ExamType[type.toUpperCase()] },
    });

    return exam;
  }
}

export { AddExamService };
