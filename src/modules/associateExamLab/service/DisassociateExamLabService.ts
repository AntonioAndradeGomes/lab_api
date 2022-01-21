import { State } from "@prisma/client";
import { AppError } from "../../../config/errors/AppError";
import prismaClient from "../../../prisma/prisma";

interface IRequest {
  examId: string;
  labId: string;
}

class DisassociateExamLabService {
  async execute({ examId, labId }: IRequest) {
    const lab = await prismaClient.laboratory.findUnique({
      where: { id: labId },
    });
    if (!lab) {
      throw new AppError("Laboratory does not exist.");
    }

    if (lab.status == State.INACTIVE) {
      throw new AppError("Laboratory is not active.");
    }

    const exam = await prismaClient.exam.findUnique({ where: { id: examId } });

    if (!exam) {
      throw new AppError("Exam does not exist.");
    }

    if (exam.status == State.INACTIVE) {
      throw new AppError("Exam is not active.");
    }

    const associateExists = await prismaClient.laboratoryOnExam.findUnique({
      where: { examId_laboratoryId: { examId, laboratoryId: labId } },
    });

    if (!associateExists) {
      throw new AppError(
        "The association between laboratory and exam not exists."
      );
    }

    await prismaClient.laboratoryOnExam.delete({
      where: { examId_laboratoryId: { examId, laboratoryId: labId } },
    });
    return {};
  }
}

export { DisassociateExamLabService };
