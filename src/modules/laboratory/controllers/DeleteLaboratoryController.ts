import { DeleteLaboratoryService } from "../services/DeleteLaboratoryService";
import { Request, Response } from "express";

class DeleteLaboratoryController{
  async hundle(request: Request, response: Response){
    const id = request.params.id;
    const service = new DeleteLaboratoryService();
    return response.status(204).json(await service.execute({id}));
  } 
}

export {DeleteLaboratoryController}
