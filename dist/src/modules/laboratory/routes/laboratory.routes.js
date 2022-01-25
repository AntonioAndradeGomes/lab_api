"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.laboratoryRoutes = void 0;
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const AddLaboratoryController_1 = require("../controllers/AddLaboratoryController");
const DeleteLaboratoryController_1 = require("../controllers/DeleteLaboratoryController");
const ListLaboratoriesController_1 = require("../controllers/ListLaboratoriesController");
const UpdateLaboratoryController_1 = require("../controllers/UpdateLaboratoryController");
const laboratoryRoutes = (0, express_1.Router)();
exports.laboratoryRoutes = laboratoryRoutes;
const addController = new AddLaboratoryController_1.AddLaboratoryController();
const listController = new ListLaboratoriesController_1.ListLaboratoriesController();
const deleteController = new DeleteLaboratoryController_1.DeleteLaboratoryController();
const updateController = new UpdateLaboratoryController_1.UpdateLaboratoryController();
laboratoryRoutes.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        address: celebrate_1.Joi.string().required(),
    },
}), addController.hundle);
laboratoryRoutes.get("/", listController.hundleActive);
laboratoryRoutes.get("/inactive", listController.hundleInactive);
laboratoryRoutes.delete("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
}), deleteController.hundle);
laboratoryRoutes.put("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        id: celebrate_1.Joi.string().uuid().required(),
    },
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        address: celebrate_1.Joi.string().required(),
        status: celebrate_1.Joi.string()
            .valid("active", "inactive", "ACTIVE", "INACTIVE")
            .required(),
    },
}), updateController.hundle);
