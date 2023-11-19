#!/usr/bin/node

import express from 'express';
import {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser
} from '../controllers/userController.js';
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/getAllUsers', getAllUsers);
router.get('/:id', getSingleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
