import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables before using them
dotenv.config();

const URL = process.env.MONGO;

const connectToDB = () => {
    try {
        mongoose.connect(URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.log('connection error', error.message);
    }
};

export default connectToDB;
