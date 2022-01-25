import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { AddExamController } from "../controllers/AddExamController";
import { DeleteExamController } from "../controllers/DeleteExamController";

const examBatchRoutes = Router();

const addController = new AddExamController();
const deleteController = new DeleteExamController();

examBatchRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      exams: Joi.array()
        .items(
          Joi.object({
            name: Joi.string().required(),
            type: Joi.string()
              .valid("CLINICAL_ANALYSIS", "IMAGE", "clinical_analysis", "image")
              .required(),
          })
        )
        .required(),
    },
  }),
  addController.hundleBatch
);

examBatchRoutes.delete(
  "/",
  celebrate({
    [Segments.BODY]: {
      ids: Joi.array().items(Joi.string().uuid()).required(),
    },
  }),
  deleteController.hundleBatch
);

export { examBatchRoutes };
