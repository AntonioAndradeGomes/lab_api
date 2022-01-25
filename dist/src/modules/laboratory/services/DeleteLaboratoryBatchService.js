"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLaboratoryBatchService = void 0;
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class DeleteLaboratoryBatchService {
    async execute({ ids }) {
        await prisma_1.default.laboratory.deleteMany({ where: { id: { in: ids } } });
        return {};
    }
}
exports.DeleteLaboratoryBatchService = DeleteLaboratoryBatchService;
