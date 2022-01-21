"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddExamService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../../config/errors/AppError");
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class AddExamService {
    async execute({ name, type }) {
        const tyoeExists = ["CLINICAL_ANALYSIS", "IMAGE"].find((element) => element == type.toUpperCase());
        if (!tyoeExists) {
            throw new AppError_1.AppError("There is no such exam.");
        }
        const exam = await prisma_1.default.exam.create({
            data: { name, type: client_1.ExamType[type.toUpperCase()] },
        });
        return exam;
    }
}
exports.AddExamService = AddExamService;
