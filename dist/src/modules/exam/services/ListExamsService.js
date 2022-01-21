"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListExamsService = void 0;
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class ListExamsService {
    async execute({ active }) {
        if (active) {
            const exams = await prisma_1.default.exam.findMany({
                where: { status: active },
            });
            return exams;
        }
        const exams = await prisma_1.default.exam.findMany({
            where: { status: "ACTIVE" },
        });
        return exams;
    }
}
exports.ListExamsService = ListExamsService;
