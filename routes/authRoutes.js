#!/usr/bin/node

import express from 'express';
import {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout
} from '../controllers/userController.js';
import { authenticate, isAdmin } from '../middlewares/authenticates.js';
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/getAllUsers', getAllUsers);
router.get('/:id', authenticate, isAdmin, getSingleUser);
router.put('/:id', authenticate, isAdmin, updateUser);

router.delete('/:id', deleteUser);
router.put('/block-user/:id', authenticate, isAdmin, blockUser);
router.put('/unblock-user/:id', authenticate, isAdmin, unblockUser);

export default router;
