import { Request, Response } from "express";
import { ListAllAssociationsService } from "../service/ListAllAssociationsService";
import { ListAssociateByIdService } from "../service/ListAssociateByIdService";

class ListAssociateController {
  async hundleAll(request: Request, response: Response) {
    const service = new ListAllAssociationsService();
    return response.status(200).json(await service.execute());
  }

  async hundleById(request: Request, response: Response) {
    const { examId, labId } = request.params;
    const service = new ListAssociateByIdService();
    return response.status(200).json(await service.execute({ labId, examId }));
  }
}

export { ListAssociateController };
