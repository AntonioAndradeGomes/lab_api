"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLaboratoryController = void 0;
const AddLaboratoryService_1 = require("../services/AddLaboratoryService");
class AddLaboratoryController {
    async hundle(request, response) {
        const { name, address } = request.body;
        const service = new AddLaboratoryService_1.AddLaboratoryService();
        return response.status(201).json(await service.execute({ name, address }));
    }
}
exports.AddLaboratoryController = AddLaboratoryController;
