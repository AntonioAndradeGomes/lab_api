"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExamController = void 0;
const AddExamBatchService_1 = require("../services/AddExamBatchService");
const AddExamService_1 = require("../services/AddExamService");
class AddExamController {
    async hundle(request, response) {
        const { name, type } = request.body;
        const service = new AddExamService_1.AddExamService();
        return response.status(201).json(await service.execute({ name, type }));
    }
    async hundleBatch(request, response) {
        const { exams } = request.body;
        const service = new AddExamBatchService_1.AddExamBatchService();
        return response.status(201).json(await service.execute({ exams }));
    }
}
exports.AddExamController = AddExamController;
