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

laboratoryRoutes.post('/', addController.hundle);
laboratoryRoutes.get('/', listController.hundleActive);
laboratoryRoutes.get('/inactive', listController.hundleInactive);
laboratoryRoutes.delete('/:id', deleteController.hundle);
laboratoryRoutes.put('/:id', updateController.hundle);

export {laboratoryRoutes};
