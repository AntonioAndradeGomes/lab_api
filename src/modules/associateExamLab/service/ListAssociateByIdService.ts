import prismaClient from "../../../prisma/prisma";

interface IRequest {
  labId: string;
  examId: string;
}

class ListAssociateByIdService {
  async execute({ labId, examId }: IRequest) {
    const ass = await prismaClient.laboratoryOnExam.findUnique({
      where: { examId_laboratoryId: { examId, laboratoryId: labId } },
      include: { exam: true, laboratory: true },
    });
    return ass;
  }
}

export { ListAssociateByIdService };
