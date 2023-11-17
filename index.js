#!/usr/bin/node 

import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';



const app = express();
dotenv.config();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('Welcome to express server API');
})

app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on: http://localhost:${port}`);
})
