#!/usr/bin/node

import mongoose from 'mongoose';
// eslint-disable-next-line no-unused-vars
import colors from 'colors';

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'ecommerce'
    });
    console.log(`Mongodb Database is connected on: ${conn.connection.host}`.underline.cyan);
  } catch (error) {
    console.log({ errror: error.message });
  }
};

export default dbConnect;
