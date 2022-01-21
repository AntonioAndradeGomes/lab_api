"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLaboratoryService = void 0;
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class AddLaboratoryService {
    async execute({ address, name }) {
        const lab = await prisma_1.default.laboratory.create({ data: { address, name, } });
        return lab;
    }
}
exports.AddLaboratoryService = AddLaboratoryService;
