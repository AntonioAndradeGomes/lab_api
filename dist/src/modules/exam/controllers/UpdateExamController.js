"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExamController = void 0;
const UpdateExamService_1 = require("../services/UpdateExamService");
class UpdateExamController {
    async hundle(request, response) {
        const id = request.params.id;
        const { name, type, status } = request.body;
        const service = new UpdateExamService_1.UpdateExamService();
        return response.status(200).json(await service.execute({ id, type, name, status }));
    }
}
exports.UpdateExamController = UpdateExamController;
