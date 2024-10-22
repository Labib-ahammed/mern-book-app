import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectToDB from './db.js';
import bookRoutes from './routes/books.route.js'
dotenv.config();

connectToDB();
const app = express();
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json()); // Add middleware to parse JSON bodies

app.use('/api', bookRoutes)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
