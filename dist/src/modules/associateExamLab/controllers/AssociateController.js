"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateController = void 0;
const AssociateExamLabService_1 = require("../service/AssociateExamLabService");
class AssociateController {
    async hundle(request, response) {
        const { examId, labId } = request.body;
        const service = new AssociateExamLabService_1.AssociateExamLabService();
        return response.status(201).json(await service.execute({ examId, labId }));
    }
}
exports.AssociateController = AssociateController;
