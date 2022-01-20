import prismaClient from "../../../prisma/prisma";

class ListAllAssociationsService {
  async execute() {
    const ass = await prismaClient.laboratoryOnExam.findMany({
      include: { exam: true, laboratory: true },
    });
    return ass;
  }
}

export { ListAllAssociationsService };
