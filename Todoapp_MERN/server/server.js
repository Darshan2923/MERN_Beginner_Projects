import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

// mongoose.connect('');
app.use("/todo", todoRoutes);

app.listen(3001, () => console.log("Server is running"))