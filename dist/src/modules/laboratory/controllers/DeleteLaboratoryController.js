"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLaboratoryController = void 0;
const DeleteLaboratoryService_1 = require("../services/DeleteLaboratoryService");
const DeleteLaboratoryBatchService_1 = require("../services/DeleteLaboratoryBatchService");
class DeleteLaboratoryController {
    async hundle(request, response) {
        const id = request.params.id;
        const service = new DeleteLaboratoryService_1.DeleteLaboratoryService();
        return response.status(204).json(await service.execute({ id }));
    }
    async hundleBatch(request, response) {
        const { ids } = request.body;
        const service = new DeleteLaboratoryBatchService_1.DeleteLaboratoryBatchService();
        return response.status(204).json(await service.execute({ ids }));
    }
}
exports.DeleteLaboratoryController = DeleteLaboratoryController;
