import { Request, Response } from "express";
import { DeleteExamBatchService } from "../services/DeleteExamBatchService";
import { DeleteExamService } from "../services/DeleteExamService";

class DeleteExamController {
  async hundle(request: Request, response: Response) {
    const id = request.params.id;
    const service = new DeleteExamService();
    return response.status(204).json(await service.execute({ id }));
  }

  async hundleBatch(request: Request, response: Response) {
    const { ids } = request.body;
    const service = new DeleteExamBatchService();
    return response.status(204).json(await service.execute({ ids }));
  }
}

export { DeleteExamController };
