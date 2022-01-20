import { State } from "@prisma/client";
import { Request, Response } from "express";
import { ListExamsService } from "../services/ListExamsService";


class ListExamController{
  async hundleActive(request: Request, response: Response){
    const service = new ListExamsService();
    return response.status(200).json(await service.execute({active: State.ACTIVE}));
  }
  async hundleInactive(request: Request, response: Response){
    const service = new ListExamsService();
    return response.status(200).json(await service.execute({active: State.INACTIVE}));
  }
}

export {ListExamController}
