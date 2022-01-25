import { Request, Response } from "express";
import { AddLaboratoryBatchService } from "../services/AddLaboratoryBatchService";
import { AddLaboratoryService } from "../services/AddLaboratoryService";

class AddLaboratoryController{
  async hundle(request: Request, response: Response){
    const {name, address} = request.body;
    const service = new AddLaboratoryService();
    return response.status(201).json(await service.execute({name, address}));
  }

  async hundleMany(request: Request, response: Response){
    const {labs} = request.body;
    const service = new AddLaboratoryBatchService();
    return response.status(201).json(await service.execute({labs}));
  }
}

export {AddLaboratoryController}
