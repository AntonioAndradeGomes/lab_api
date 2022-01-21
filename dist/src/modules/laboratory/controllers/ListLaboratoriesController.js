"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLaboratoriesController = void 0;
const client_1 = require("@prisma/client");
const ListLaboratoryService_1 = require("../services/ListLaboratoryService");
class ListLaboratoriesController {
    async hundleActive(request, response) {
        const service = new ListLaboratoryService_1.ListLaboratoriesService();
        return response.status(200).json(await service.execute({ active: client_1.State.ACTIVE }));
    }
    async hundleInactive(request, response) {
        const service = new ListLaboratoryService_1.ListLaboratoriesService();
        return response.status(200).json(await service.execute({ active: client_1.State.INACTIVE }));
    }
}
exports.ListLaboratoriesController = ListLaboratoriesController;
