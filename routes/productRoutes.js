import express from 'express';
import { createProduct, getProduct, getProducts } from '../controllers/productController.js';
const router = express.Router();


router.post('/create', createProduct);
router.get('/:id', getProduct);
router.get('/', getProducts);


export default router;
