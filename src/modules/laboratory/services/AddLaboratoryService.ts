import prismaClient from "../../../prisma/prisma"


interface IRequest{
  address: string;
  name: string;
}

class AddLaboratoryService{
  async execute({address, name} : IRequest){
    const lab = await prismaClient.laboratory.create({data: {address, name,}});
    return lab;
  }
}

export {AddLaboratoryService}
