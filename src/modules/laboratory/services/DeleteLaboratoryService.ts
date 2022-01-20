import { State } from "@prisma/client";
import { AppError } from "../../../config/errors/AppError";
import prismaClient from "../../../prisma/prisma"

interface IRequest{
  id: string;
}

class DeleteLaboratoryService{
  async execute({id} : IRequest){
    const lab = await prismaClient.laboratory.findUnique({where: {id}});
    if(lab.status == State.INACTIVE){
      throw new AppError('Laboratory inactive');
    }

    await prismaClient.laboratory.delete({where: {id}});
    return {};
  }
}

export {DeleteLaboratoryService}
