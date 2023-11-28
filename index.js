#!/usr/bin/node

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConnect from './config/database.js';
import authRouter from './routes/authRoutes.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
const port = process.env.PORT || 5001;
dbConnect();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/user', authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on: http://localhost:${port}`);
});
