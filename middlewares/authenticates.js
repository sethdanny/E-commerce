#!/usr/bin/node

import User from '../models/user.js';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

export const authenticate = asyncHandler(
  async (req, res, next) => {
    let token;
    if (req?.headers?.authorization.startsWith('Bearer')) {
      token = req?.headers?.authorization.split(' ')[1];
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      } catch (error) {
        throw new Error('Not Authorized');
      }
    } else {
      throw new Error('There is no token attached to the header');
    }
  }
);

export const isAdmin = asyncHandler(
    async(req, res, next) => {
        const {email} = req.user;
        const adminUser = await User.findOne({email});
        if (adminUser.role !== 'admin') {
            throw new Error('You are not admin');
        } else {
            next();
        }
    }
);