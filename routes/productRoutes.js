import express from 'express';
const router = express.Router();
import {createProduct} from '../controllers/productController.js';


router.post('/create', createProduct);


export default router;