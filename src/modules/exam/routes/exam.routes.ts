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

examRoutes.post('/', addController.hundle);
examRoutes.get('/', listController.hundleActive);
examRoutes.get('/inactive', listController.hundleInactive);
examRoutes.delete('/:id', deleteController.hundle);
examRoutes.put('/:id', updateController.hundle);



export {examRoutes};
