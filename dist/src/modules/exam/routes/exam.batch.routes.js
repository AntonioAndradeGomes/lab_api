"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examBatchRoutes = void 0;
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const AddExamController_1 = require("../controllers/AddExamController");
const DeleteExamController_1 = require("../controllers/DeleteExamController");
const examBatchRoutes = (0, express_1.Router)();
exports.examBatchRoutes = examBatchRoutes;
const addController = new AddExamController_1.AddExamController();
const deleteController = new DeleteExamController_1.DeleteExamController();
examBatchRoutes.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        exams: celebrate_1.Joi.array()
            .items(celebrate_1.Joi.object({
            name: celebrate_1.Joi.string().required(),
            type: celebrate_1.Joi.string()
                .valid("CLINICAL_ANALYSIS", "IMAGE", "clinical_analysis", "image")
                .required(),
        }))
            .required(),
    },
}), addController.hundleBatch);
examBatchRoutes.delete("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        ids: celebrate_1.Joi.array().items(celebrate_1.Joi.string().uuid()).required(),
    },
}), deleteController.hundleBatch);
