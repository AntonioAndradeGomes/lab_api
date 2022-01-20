import {response, Router} from 'express';
import { laboratoryRoutes } from '../modules/laboratory/routes/laboratory.routes';

const router = Router();

router.get('/', (request, response) => {
  return response.json({message: 'Hello world',});
});

router.use('/laboratories', laboratoryRoutes);

export {router};
