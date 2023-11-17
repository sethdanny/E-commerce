import mongoose from 'mongoose';
import colors from 'colors';

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "ecommerce"
        })
        console.log(`Mongo DB connected on ${conn.connection.host}.cyan`);
    } catch (error) {
        console.log({errror: error.message});   
    }   
}

export default dbConnect;