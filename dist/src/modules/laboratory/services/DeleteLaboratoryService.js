"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLaboratoryService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../../config/errors/AppError");
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class DeleteLaboratoryService {
    async execute({ id }) {
        const lab = await prisma_1.default.laboratory.findUnique({ where: { id } });
        if (lab.status == client_1.State.INACTIVE) {
            throw new AppError_1.AppError('Laboratory inactive');
        }
        await prisma_1.default.laboratory.delete({ where: { id } });
        return {};
    }
}
exports.DeleteLaboratoryService = DeleteLaboratoryService;
