import { Request, Response } from "express";
import { AddLaboratoryService } from "../services/AddLaboratoryService";

class AddLaboratoryController{
  async hundle(request: Request, response: Response){
    const {name, address} = request.body;
    const service = new AddLaboratoryService();
    return response.status(201).json(await service.execute({name, address}));
  }
}

export {AddLaboratoryController}
