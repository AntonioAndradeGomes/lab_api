import { State } from "@prisma/client";
import { Request, Response } from "express";
import { ListExamsService } from "../services/ListExamsService";


class ListExamController{
  async hundleActive(request: Request, response: Response){
    const name = request.query.name ? request.query.name.toString().trim() : null;
   // console.log(name);
    const service = new ListExamsService();
    return response.status(200).json(await service.execute({active: State.ACTIVE, name}));
  }
  async hundleInactive(request: Request, response: Response){
    const service = new ListExamsService();
    return response.status(200).json(await service.execute({active: State.INACTIVE, name: null}));
  }
}

export {ListExamController}
