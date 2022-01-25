import { Request, Response } from "express";
import { AddExamBatchService } from "../services/AddExamBatchService";
import { AddExamService } from "../services/AddExamService";

class AddExamController{
  async hundle(request: Request, response: Response){
    const {name, type} = request.body;
    const service = new AddExamService();
    return response.status(201).json(await service.execute({name, type}));
  }

  async hundleBatch(request: Request, response: Response){
    const {exams} = request.body;
    const service = new AddExamBatchService();
    return response.status(201).json(await service.execute({exams}));
  }
}

export {AddExamController}
