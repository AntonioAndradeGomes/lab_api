"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateExamLabService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../../config/errors/AppError");
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class DisassociateExamLabService {
    async execute({ examId, labId }) {
        const lab = await prisma_1.default.laboratory.findUnique({
            where: { id: labId },
        });
        if (!lab) {
            throw new AppError_1.AppError("Laboratory does not exist.");
        }
        if (lab.status == client_1.State.INACTIVE) {
            throw new AppError_1.AppError("Laboratory is not active.");
        }
        const exam = await prisma_1.default.exam.findUnique({ where: { id: examId } });
        if (!exam) {
            throw new AppError_1.AppError("Exam does not exist.");
        }
        if (exam.status == client_1.State.INACTIVE) {
            throw new AppError_1.AppError("Exam is not active.");
        }
        const associateExists = await prisma_1.default.laboratoryOnExam.findUnique({
            where: { examId_laboratoryId: { examId, laboratoryId: labId } },
        });
        if (!associateExists) {
            throw new AppError_1.AppError("The association between laboratory and exam not exists.");
        }
        await prisma_1.default.laboratoryOnExam.delete({
            where: { examId_laboratoryId: { examId, laboratoryId: labId } },
        });
        return {};
    }
}
exports.DisassociateExamLabService = DisassociateExamLabService;
