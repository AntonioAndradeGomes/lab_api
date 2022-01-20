import { State } from "@prisma/client";
import { Request, Response } from "express";

import { ListLaboratoriesService } from "../services/ListLaboratoryService";

class ListLaboratoriesController{
  async hundleActive(request: Request, response: Response){
    const service = new ListLaboratoriesService();
    return response.status(201).json(await service.execute({active: State.ACTIVE}));
  }
  async hundleInactive(request: Request, response: Response){
    const service = new ListLaboratoriesService();
    return response.status(201).json(await service.execute({active: State.INACTIVE}));
  }
}

export {ListLaboratoriesController}
