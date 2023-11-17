#!/usr/bin/node

import User from '../models/user.js';

export const createUser = async(req, res) => {
    try {
        const { email } = req.body;
        const userExists = await User.findOne({email});
        if(userExists) {
            res.status(400).json({
                success: false,
                message: 'Email Already Exists'
            });
        }
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}