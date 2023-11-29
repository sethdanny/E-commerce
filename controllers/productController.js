import Product from '../models/product.js';
import asyncHandler from 'express-async-handler';

export const createProduct = asyncHandler(
  async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.json({ newProduct });
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getProduct = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    try {
      const findProduct = await Product.findById(id);
      res.status(200).json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getProducts = asyncHandler(
  async (req, res) => {
    try {
      const findProducts = await Product.find();
      res.status(200).json(findProducts);
    } catch (error) {
      throw new Error(error);
    }
  }
);
