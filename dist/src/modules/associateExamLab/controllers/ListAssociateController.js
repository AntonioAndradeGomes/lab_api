"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssociateController = void 0;
const ListAllAssociationsService_1 = require("../service/ListAllAssociationsService");
const ListAssociateByIdService_1 = require("../service/ListAssociateByIdService");
class ListAssociateController {
    async hundleAll(request, response) {
        const service = new ListAllAssociationsService_1.ListAllAssociationsService();
        return response.status(200).json(await service.execute());
    }
    async hundleById(request, response) {
        const { examId, labId } = request.params;
        const service = new ListAssociateByIdService_1.ListAssociateByIdService();
        return response.status(200).json(await service.execute({ labId, examId }));
    }
}
exports.ListAssociateController = ListAssociateController;
