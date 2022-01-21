import "dotenv/config";

import cors from 'cors';

import "express-async-errors";

import express, {NextFunction, Request, Response} from "express";
import { router } from "./routes/routes";
import { AppError } from "./config/errors/AppError";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, NextFunction) => {
    if(err instanceof AppError){
      return response.status(err.statusCode).json({status: 'error', message: err.message});
    }
    console.log(err);
    return response.status(500).json({status: 'error', message: 'Internal server error'});
  }
);

app.listen(process.env.PORT || 7000, () => console.log('Server in running.'),);
