import { Request, Response } from "express";
import { AddExamService } from "../services/AddExamService";

class AddExamController{
  async hundle(request: Request, response: Response){
    const {name, type} = request.body;
    const service = new AddExamService();
    return response.status(201).json(await service.execute({name, type}));
  }
}

export {AddExamController}
