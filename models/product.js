#!/usr/bin/node

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    slug:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    brand: {
        type: String,
        unique: true,
        enum: ["Apple", "Samsung", "Lenovo"]

    },
    quantity: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array
    },
    color: {
        type: String,
        enum: ["Black", "Brown", "Red"]
    },
    ratings: {
        star: Number,
        postedBy: {type: mongoose.Schem.Types.ObjectId, ref: "User"}
    }
}, {timestamps: true});


const Product = mongoose.model('Product', productSchema);
export default Product;