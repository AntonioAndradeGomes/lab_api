"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associteRouter = void 0;
const celebrate_1 = require("celebrate");
const express_1 = require("express");
const AssociateController_1 = require("../controllers/AssociateController");
const DisassociateController_1 = require("../controllers/DisassociateController");
const ListAssociateController_1 = require("../controllers/ListAssociateController");
const associteRouter = (0, express_1.Router)();
exports.associteRouter = associteRouter;
const addController = new AssociateController_1.AssociateController();
const listController = new ListAssociateController_1.ListAssociateController();
const deleteController = new DisassociateController_1.DisassociateController();
associteRouter.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        examId: celebrate_1.Joi.string().uuid().required(),
        labId: celebrate_1.Joi.string().uuid().required(),
    },
}), addController.hundle);
associteRouter.get("/", listController.hundleAll);
associteRouter.get("/:examId/:labId", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        examId: celebrate_1.Joi.string().uuid().required(),
        labId: celebrate_1.Joi.string().uuid().required(),
    },
}), listController.hundleById);
associteRouter.delete("/:examId/:labId", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: {
        examId: celebrate_1.Joi.string().uuid().required(),
        labId: celebrate_1.Joi.string().uuid().required(),
    },
}), deleteController.hundle);
