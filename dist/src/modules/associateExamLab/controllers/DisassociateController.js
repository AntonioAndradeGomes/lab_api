"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateController = void 0;
const DisassociateExamLabService_1 = require("../service/DisassociateExamLabService");
class DisassociateController {
    async hundle(request, response) {
        const { examId, labId } = request.params;
        const service = new DisassociateExamLabService_1.DisassociateExamLabService();
        return response.status(204).json(await service.execute({ examId, labId }));
    }
}
exports.DisassociateController = DisassociateController;
