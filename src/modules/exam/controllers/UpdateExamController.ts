import { Request, Response } from "express";
import { UpdateExamService } from "../services/UpdateExamService";

class UpdateExamController {
  async hundle(request: Request, response: Response) {
    const id = request.params.id;
    const { name, type, status } = request.body;
    const service = new UpdateExamService();
    return response.status(200).json(await service.execute({id, type,name, status}));
  }
}

export { UpdateExamController };
