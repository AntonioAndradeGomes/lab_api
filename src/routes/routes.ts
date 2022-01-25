import {response, Router} from 'express';
import { associteRouter } from '../modules/associateExamLab/routes/associations.routes';
import { examBatchRoutes } from '../modules/exam/routes/exam.batch.routes';
import { examRoutes } from '../modules/exam/routes/exam.routes';
import { laboratoryBatchRoutes } from '../modules/laboratory/routes/laboratory.batch.routes';
import { laboratoryRoutes } from '../modules/laboratory/routes/laboratory.routes';

const router = Router();

router.get('/', (request, response) => {
  return response.json({message: 'Hello world',});
});

router.use('/laboratories', laboratoryRoutes);
router.use('/batch/laboratories', laboratoryBatchRoutes);
router.use('/exams', examRoutes);
router.use('/batch/exams', examBatchRoutes);
router.use('/associate', associteRouter);

export {router};
