"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laboratoryBatchRoutes = void 0;
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const AddLaboratoryController_1 = require("../controllers/AddLaboratoryController");
const DeleteLaboratoryController_1 = require("../controllers/DeleteLaboratoryController");
const laboratoryBatchRoutes = (0, express_1.Router)();
exports.laboratoryBatchRoutes = laboratoryBatchRoutes;
const deleteController = new DeleteLaboratoryController_1.DeleteLaboratoryController();
const addController = new AddLaboratoryController_1.AddLaboratoryController();
laboratoryBatchRoutes.delete("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        ids: celebrate_1.Joi.array().items(celebrate_1.Joi.string().uuid()).required(),
    },
}), deleteController.hundleBatch);
laboratoryBatchRoutes.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        labs: celebrate_1.Joi.array()
            .items(celebrate_1.Joi.object({
            name: celebrate_1.Joi.string().required(),
            address: celebrate_1.Joi.string().required(),
        }))
            .required(),
    },
}), addController.hundleMany);
