import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { AddLaboratoryController } from "../controllers/AddLaboratoryController";
import { DeleteLaboratoryController } from "../controllers/DeleteLaboratoryController";

const laboratoryBatchRoutes = Router();

const deleteController = new DeleteLaboratoryController();
const addController = new AddLaboratoryController();

laboratoryBatchRoutes.delete(
  "/",
  celebrate({
    [Segments.BODY]: {
      ids: Joi.array().items(Joi.string().uuid()).required(),
    },
  }),
  deleteController.hundleBatch
);

laboratoryBatchRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      labs: Joi.array()
        .items(
          Joi.object({
            name: Joi.string().required(),
            address: Joi.string().required(),
          })
        )
        .required(),
    },
  }),
  addController.hundleMany
);

export { laboratoryBatchRoutes };
