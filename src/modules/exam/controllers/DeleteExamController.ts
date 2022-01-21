
import { Request, Response } from "express";
import { DeleteExamService } from "../services/DeleteExamService";

class DeleteExamController{
  async hundle(request: Request, response: Response){
    const id = request.params.id;
    const service = new DeleteExamService();
    return response.status(204).json(await service.execute({id}));
  } 
}

export {DeleteExamController}
