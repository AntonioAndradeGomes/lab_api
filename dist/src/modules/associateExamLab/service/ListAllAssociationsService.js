"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllAssociationsService = void 0;
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class ListAllAssociationsService {
    async execute() {
        const ass = await prisma_1.default.laboratoryOnExam.findMany({
            include: { exam: true, laboratory: true },
        });
        return ass;
    }
}
exports.ListAllAssociationsService = ListAllAssociationsService;
