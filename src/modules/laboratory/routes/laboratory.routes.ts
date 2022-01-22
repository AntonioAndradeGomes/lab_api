import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { AddLaboratoryController } from "../controllers/AddLaboratoryController";
import { DeleteLaboratoryController } from "../controllers/DeleteLaboratoryController";
import { ListLaboratoriesController } from "../controllers/ListLaboratoriesController";
import { UpdateLaboratoryController } from "../controllers/UpdateLaboratoryController";

const laboratoryRoutes = Router();

const addController = new AddLaboratoryController();
const listController = new ListLaboratoriesController();
const deleteController = new DeleteLaboratoryController();
const updateController = new UpdateLaboratoryController();

laboratoryRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      adress: Joi.string().required(),
    },
  }),
  addController.hundle
);

laboratoryRoutes.get("/", listController.hundleActive);

laboratoryRoutes.get("/inactive", listController.hundleInactive);

laboratoryRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteController.hundle
);

laboratoryRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  updateController.hundle
);

export { laboratoryRoutes };
