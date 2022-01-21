"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssociateByIdService = void 0;
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class ListAssociateByIdService {
    async execute({ labId, examId }) {
        const ass = await prisma_1.default.laboratoryOnExam.findUnique({
            where: { examId_laboratoryId: { examId, laboratoryId: labId } },
            include: { exam: true, laboratory: true },
        });
        return ass;
    }
}
exports.ListAssociateByIdService = ListAssociateByIdService;
