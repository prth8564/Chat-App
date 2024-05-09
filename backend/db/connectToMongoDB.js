import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectToMongoDB = () => {
    try{
        mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err.message);
    }
}