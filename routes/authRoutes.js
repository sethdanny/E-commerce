#!/usr/bin/node 

import express from 'express';
const router = express.Router();
import {createUser, loginUser} from '../controllers/userController.js'

router.post('/user/register', createUser);
router.post('/user/login', loginUser);

export default router;