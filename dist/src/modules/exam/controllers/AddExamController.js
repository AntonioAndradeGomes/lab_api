"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExamController = void 0;
const AddExamService_1 = require("../services/AddExamService");
class AddExamController {
    async hundle(request, response) {
        const { name, type } = request.body;
        const service = new AddExamService_1.AddExamService();
        return response.status(201).json(await service.execute({ name, type }));
    }
}
exports.AddExamController = AddExamController;
