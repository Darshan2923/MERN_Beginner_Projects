import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { bookRoutes } from './routes/BookRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/book_data");

app.listen(3001, () => console.log("Server is running"));