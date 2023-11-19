#!/usr/bin/node

import User from '../models/user.js';
import asyncHandler from 'express-async-handler';

export const createUser = asyncHandler(
    async(req, res) => {
        try {
            const { email } = req.body;
            const userExists = await User.findOne({email});
            if(userExists) {
                throw new Error('User already exists');
            }
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);    
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
);