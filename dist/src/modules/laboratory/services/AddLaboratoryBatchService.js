"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLaboratoryBatchService = void 0;
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class AddLaboratoryBatchService {
    async execute({ labs }) {
        const createMany = await prisma_1.default.laboratory.createMany({ data: labs });
        return createMany;
    }
}
exports.AddLaboratoryBatchService = AddLaboratoryBatchService;
