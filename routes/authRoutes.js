#!/usr/bin/node 

import express from 'express';
const router = express.Router();
import {createUser} from '../controllers/usercontroller.js'

router.post('/user/register', createUser);

export default router;