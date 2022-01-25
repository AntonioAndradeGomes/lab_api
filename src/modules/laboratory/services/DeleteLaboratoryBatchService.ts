import prismaClient from "../../../prisma/prisma";

interface IRequest {
  ids: string[];
}

class DeleteLaboratoryBatchService {
  async execute({ ids }: IRequest) {
    await prismaClient.laboratory.deleteMany({ where: { id: { in: ids } } });
    return {};
  }
}

export { DeleteLaboratoryBatchService };
