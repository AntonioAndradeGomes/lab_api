import { Request, Response } from "express";
import { AssociateExamLabService } from "../service/AssociateExamLabService";


class AssociateController{
  async hundle(request: Request, response: Response){
    const {examId, labId} = request.body;
    const service = new AssociateExamLabService();
    return response.status(201).json(await service.execute({examId, labId}));
  }
}

export {AssociateController}
