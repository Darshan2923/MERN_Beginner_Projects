import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { createRoutes } from './routes/createRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use("/createblog", createRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/blog_app");

app.listen(3000, () => console.log("Server is running"));