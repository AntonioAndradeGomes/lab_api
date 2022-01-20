import { Request, Response } from "express";
import { UpdateLaboratoryService } from "../services/UpdateLaboratoryService";

class UpdateLaboratoryController {
  async hundle(request: Request, response: Response) {
    const id = request.params.id;
    const { name, address, status } = request.body;
    const service = new UpdateLaboratoryService();
    return response.status(200).json(await service.execute({id, address,name, status}));
  }
}

export { UpdateLaboratoryController };
