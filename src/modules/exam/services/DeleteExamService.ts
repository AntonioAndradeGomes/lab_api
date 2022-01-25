import { State } from "@prisma/client";
import { AppError } from "../../../config/errors/AppError";
import prismaClient from "../../../prisma/prisma";

interface IRequest{
  id: string;
}

class DeleteExamService{
  async execute({id} : IRequest){
    const exam = await prismaClient.exam.findUnique({where: {id}});

    if(!exam){
      throw new AppError("Exam does not exist.");
    }
    if(exam.status == State.INACTIVE){
      throw new AppError('Exam inactive');
    }

    await prismaClient.exam.delete({where: {id}});
    return {};
  }
}

export {DeleteExamService}
