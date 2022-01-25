"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExamBatchService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class AddExamBatchService {
    async execute({ exams }) {
        let examsConvert = exams.map((e) => {
            const type = (e.type =
                client_1.ExamType[e.type.toUpperCase()] || client_1.ExamType["CLINICAL_ANALYSIS"]);
            return {
                name: e.name,
                type: type,
            };
        });
        const createMany = await prisma_1.default.exam.createMany({ data: examsConvert });
        return createMany;
    }
}
exports.AddExamBatchService = AddExamBatchService;
