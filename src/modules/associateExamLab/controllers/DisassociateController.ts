import { Request, Response } from "express";
import { DisassociateExamLabService } from "../service/DisassociateExamLabService";

class DisassociateController {
  async hundle(request: Request, response: Response) {
    const { examId, labId } = request.params;
    const service = new DisassociateExamLabService();
    return response.status(204).json(await service.execute({ examId, labId }));
  }
}

export { DisassociateController };
