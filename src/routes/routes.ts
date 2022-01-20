import {response, Router} from 'express';
import { examRoutes } from '../modules/exam/routes/exam.routes';
import { laboratoryRoutes } from '../modules/laboratory/routes/laboratory.routes';

const router = Router();

router.get('/', (request, response) => {
  return response.json({message: 'Hello world',});
});

router.use('/laboratories', laboratoryRoutes);
router.use('/exams', examRoutes);

export {router};
