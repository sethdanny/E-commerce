#!/usr/bin/node

import { generateToken } from '../config/jwtToken.js';
import User from '../models/user.js';
import asyncHandler from 'express-async-handler';

export const createUser = asyncHandler(
  async (req, res) => {
    try {
      const { email } = req.body;
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new Error('User already exists');
      }
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

export const loginUser = asyncHandler(
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExists = await User.findOne({ email });
      if (userExists && await userExists.isPasswordMatched(password)) {
        res.status(200).json({
          _id: userExists?._id,
          firstName: userExists?.firstName,
          lastName: userExists?.lastName,
          email: userExists?.email,
          token: generateToken(userExists?._id)
        });
      } else {
        throw new Error('Invalid Credentials');
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

export const getAllUsers = asyncHandler(
  async (req, res) => {
    try {
      const getUsers = await User.find();
      res.status(200).json(getUsers);
    } catch (error) {
      throw new Error(error);
    }
  });

export const getSingleUser = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    try {
      const singleUser = await User.findById(id);
      res.status(200).json(singleUser);
    } catch (error) {
      throw new Error(error);
    }
  });

export const updateUser = asyncHandler(
  async (req, res) => {
    try {
      const { id } = req.user;
      const updatedUser = await User.findByIdAndUpdate(id, {
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        mobile: req?.body?.mobile
      },
      { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const deleteUser = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    try {
      const deletuser = await User.findByIdAndDelete(id);
      res.status(200).json(deletuser);
    } catch (error) {
      throw new Error(error);
    }
  });

export const blockUser = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    try {
      const blockedUser = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
      res.status(200).json({
        message: 'User Blocked',
        blockedUser
      });
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const unblockUser = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    try {
      const unblockedUser = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
      res.status(200).json({
        message: 'User unblocked',
        unblockedUser
      });
    } catch (error) {
      throw new Error(error);
    }
  }
);
