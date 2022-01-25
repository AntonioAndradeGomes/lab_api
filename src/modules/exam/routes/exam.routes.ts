import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { AddExamController } from "../controllers/AddExamController";
import { DeleteExamController } from "../controllers/DeleteExamController";
import { ListExamController } from "../controllers/ListExamController";
import { UpdateExamController } from "../controllers/UpdateExamController";

const examRoutes = Router();

const addController = new AddExamController();
const listController = new ListExamController();
const deleteController = new DeleteExamController();
const updateController = new UpdateExamController();

examRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      type: Joi.string()
        .valid("CLINICAL_ANALYSIS", "IMAGE", "clinical_analysis", "image")
        .required(),
    },
  }),
  addController.hundle
);

examRoutes.get("/", listController.hundleActive);

examRoutes.get("/inactive", listController.hundleInactive);

examRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteController.hundle
);

examRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  updateController.hundle
);

export { examRoutes };
