"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLaboratoryService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = require("../../../config/errors/AppError");
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class UpdateLaboratoryService {
    async execute({ id, name, address, status }) {
        const statusExists = ["ACTIVE", "INACTIVE"].find((element) => element == status.toUpperCase());
        if (!statusExists) {
            throw new AppError_1.AppError("Non-existent lab status");
        }
        let lab = await prisma_1.default.laboratory.findUnique({ where: { id } });
        if (!lab) {
            throw new AppError_1.AppError("Laboratory does not exist");
        }
        lab = await prisma_1.default.laboratory.update({
            where: { id },
            data: { name, address, status: client_1.State[status.toUpperCase()] },
        });
        return lab;
    }
}
exports.UpdateLaboratoryService = UpdateLaboratoryService;
