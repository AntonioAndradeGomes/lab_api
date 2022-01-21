"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExamService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../../config/errors/AppError");
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class DeleteExamService {
    async execute({ id }) {
        const exam = await prisma_1.default.exam.findUnique({ where: { id } });
        if (exam.status == client_1.State.INACTIVE) {
            throw new AppError_1.AppError('Exam inactive');
        }
        await prisma_1.default.exam.delete({ where: { id } });
        return {};
    }
}
exports.DeleteExamService = DeleteExamService;
