"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examRoutes = void 0;
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const AddExamController_1 = require("../controllers/AddExamController");
const DeleteExamController_1 = require("../controllers/DeleteExamController");
const ListExamController_1 = require("../controllers/ListExamController");
const UpdateExamController_1 = require("../controllers/UpdateExamController");
const examRoutes = (0, express_1.Router)();
exports.examRoutes = examRoutes;
const addController = new AddExamController_1.AddExamController();
const listController = new ListExamController_1.ListExamController();
const deleteController = new DeleteExamController_1.DeleteExamController();
const updateController = new UpdateExamController_1.UpdateExamController();
examRoutes.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string()
            .valid("CLINICAL_ANALYSIS", "IMAGE", "clinical_analysis", "image")
            .required(),
    },
}), addController.hundle);
examRoutes.get("/", listController.hundleActive);
examRoutes.get("/inactive", listController.hundleInactive);
examRoutes.delete("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
}), deleteController.hundle);
examRoutes.put("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        type: celebrate_1.Joi.string()
            .valid("CLINICAL_ANALYSIS", "IMAGE", "clinical_analysis", "image")
            .required(),
        status: celebrate_1.Joi.string()
            .valid("active", "inactive", "ACTIVE", "INACTIVE")
            .required(),
    },
}), updateController.hundle);
