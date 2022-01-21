"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLaboratoryController = void 0;
const UpdateLaboratoryService_1 = require("../services/UpdateLaboratoryService");
class UpdateLaboratoryController {
    async hundle(request, response) {
        const id = request.params.id;
        const { name, address, status } = request.body;
        const service = new UpdateLaboratoryService_1.UpdateLaboratoryService();
        return response.status(200).json(await service.execute({ id, address, name, status }));
    }
}
exports.UpdateLaboratoryController = UpdateLaboratoryController;
