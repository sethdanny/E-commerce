#!/usr/bin/node 

import express from 'express';
const router = express.Router();
import {createUser} from '../controllers/userController.js'

router.post('/user/register', createUser);

export default router;