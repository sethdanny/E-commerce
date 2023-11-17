#!/usr/bin/node 

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConnect from './config/database.js';
import authRouter from './routes/authRoutes.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 5001;
dbConnect();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/', authRouter);

app.listen(port, () => {
    console.log(`Server is listening on: http://localhost:${port}`);
})
