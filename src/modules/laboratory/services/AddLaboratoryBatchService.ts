import prismaClient from "../../../prisma/prisma"

interface ILab{
  address: string;
  name: string;
}

interface IRequest{
  labs : ILab[];
}


class AddLaboratoryBatchService{
  async execute({labs} : IRequest){
    const createMany = await prismaClient.laboratory.createMany({data: labs});
    return createMany;
  }
}

export {AddLaboratoryBatchService}
