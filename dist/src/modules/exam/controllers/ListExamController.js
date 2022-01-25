"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListExamController = void 0;
const client_1 = require("@prisma/client");
const ListExamsService_1 = require("../services/ListExamsService");
class ListExamController {
    async hundleActive(request, response) {
        const name = request.query.name ? request.query.name.toString().trim() : null;
        // console.log(name);
        const service = new ListExamsService_1.ListExamsService();
        return response.status(200).json(await service.execute({ active: client_1.State.ACTIVE, name }));
    }
    async hundleInactive(request, response) {
        const service = new ListExamsService_1.ListExamsService();
        return response.status(200).json(await service.execute({ active: client_1.State.INACTIVE, name: null }));
    }
}
exports.ListExamController = ListExamController;
