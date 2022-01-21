"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExamController = void 0;
const DeleteExamService_1 = require("../services/DeleteExamService");
class DeleteExamController {
    async hundle(request, response) {
        const id = request.params.id;
        const service = new DeleteExamService_1.DeleteExamService();
        return response.status(204).json(await service.execute({ id }));
    }
}
exports.DeleteExamController = DeleteExamController;
