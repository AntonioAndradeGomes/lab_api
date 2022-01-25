import { DeleteLaboratoryService } from "../services/DeleteLaboratoryService";
import { Request, Response } from "express";
import { DeleteLaboratoryBatchService } from "../services/DeleteLaboratoryBatchService";

class DeleteLaboratoryController{
  async hundle(request: Request, response: Response){
    const id = request.params.id;
    const service = new DeleteLaboratoryService();
    return response.status(204).json(await service.execute({id}));
  } 

  async hundleBatch(request: Request, response: Response){
    const {ids} = request.body;
    const service = new DeleteLaboratoryBatchService();
    return response.status(204).json(await service.execute({ids}));
  }
}

export {DeleteLaboratoryController}
