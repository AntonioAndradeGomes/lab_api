import { State } from "@prisma/client";
import prismaClient from "../../../prisma/prisma"



interface IRequest{
  active: State,
}


class ListLaboratoriesService{
  async execute({active} : IRequest) {
    if(active){
      const labs = await prismaClient.laboratory.findMany({where : {status: active}});
      return labs;
    }
    const labs = await prismaClient.laboratory.findMany({where : {status: "ACTIVE"}});
      return labs;

  }
}

export {ListLaboratoriesService}
