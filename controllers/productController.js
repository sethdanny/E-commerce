import Product from '../models/product.js';
import asyncHandler from 'express-async-handler';

export const createProduct = asyncHandler(
    async (req, res) => {
        res.json({message: "created the product succefully"});
    }
);