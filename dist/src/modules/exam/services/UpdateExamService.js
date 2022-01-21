"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExamService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../../config/errors/AppError");
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class UpdateExamService {
    async execute({ id, name, type, status }) {
        const tyoeExists = ["CLINICAL_ANALYSIS", "IMAGE"].find((element) => element == type.toUpperCase());
        if (!tyoeExists) {
            throw new AppError_1.AppError("There is no such exam.");
        }
        const statusExists = ["ACTIVE", "INACTIVE"].find((element) => element == status.toUpperCase());
        if (!statusExists) {
            throw new AppError_1.AppError("Non-existent exam status");
        }
        let exam = await prisma_1.default.exam.findUnique({ where: { id } });
        if (!exam) {
            throw new AppError_1.AppError("Exam does not exist");
        }
        exam = await prisma_1.default.exam.update({
            where: { id },
            data: { name, type: client_1.ExamType[type.toUpperCase()], status: client_1.State[status.toUpperCase()] },
        });
        return exam;
    }
}
exports.UpdateExamService = UpdateExamService;
