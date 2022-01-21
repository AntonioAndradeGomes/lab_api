"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLaboratoriesService = void 0;
const prisma_1 = __importDefault(require("../../../prisma/prisma"));
class ListLaboratoriesService {
    async execute({ active }) {
        if (active) {
            const labs = await prisma_1.default.laboratory.findMany({ where: { status: active } });
            return labs;
        }
        const labs = await prisma_1.default.laboratory.findMany({ where: { status: "ACTIVE" } });
        return labs;
    }
}
exports.ListLaboratoriesService = ListLaboratoriesService;
