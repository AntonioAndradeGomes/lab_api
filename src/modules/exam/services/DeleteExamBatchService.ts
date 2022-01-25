import prismaClient from "../../../prisma/prisma";

interface IRequest {
  ids: string[];
}

class DeleteExamBatchService {
  async execute({ ids }: IRequest) {
    await prismaClient.exam.deleteMany({ where: { id: { in: ids } } });
    return {};
  }
}

export { DeleteExamBatchService };
