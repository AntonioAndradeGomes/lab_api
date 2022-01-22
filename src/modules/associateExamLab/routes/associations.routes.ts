import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { AssociateController } from "../controllers/AssociateController";
import { DisassociateController } from "../controllers/DisassociateController";
import { ListAssociateController } from "../controllers/ListAssociateController";

const associteRouter = Router();

const addController = new AssociateController();
const listController = new ListAssociateController();
const deleteController = new DisassociateController();

associteRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      examId: Joi.string().uuid().required(),
      labId: Joi.string().uuid().required(),
    },
  }),
  addController.hundle
);

associteRouter.get("/", listController.hundleAll);

associteRouter.get(
  "/:examId/:labId",
  celebrate({
    [Segments.PARAMS]: {
      examId: Joi.string().uuid().required(),
      labId: Joi.string().uuid().required(),
    },
  }),
  listController.hundleById
);

associteRouter.delete(
  "/:examId/:labId",
  celebrate({
    [Segments.PARAMS]: {
      examId: Joi.string().uuid().required(),
      labId: Joi.string().uuid().required(),
    },
  }),
  deleteController.hundle
);

export { associteRouter };
