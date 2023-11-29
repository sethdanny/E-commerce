import express from 'express';
const router = express.Router();
import {createProduct, getProduct, getProducts} from '../controllers/productController.js';


router.post('/create', createProduct);
router.get('/:id', getProduct);
router.get('/', getProducts);


export default router;