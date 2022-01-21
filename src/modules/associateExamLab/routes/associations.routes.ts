import { Router } from "express";
import { AssociateController } from "../controllers/AssociateController";
import { DisassociateController } from "../controllers/DisassociateController";
import { ListAssociateController } from "../controllers/ListAssociateController";


const associteRouter = Router();

const addController = new AssociateController();
const listController = new ListAssociateController();
const deleteController = new DisassociateController();


associteRouter.post('/', addController.hundle);
associteRouter.get('/', listController.hundleAll);
associteRouter.get('/:examId/:labId', listController.hundleById);
associteRouter.delete('/:examId/:labId', deleteController.hundle);

export {associteRouter}

