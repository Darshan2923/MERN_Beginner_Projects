import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { contactRoutes } from './routes/contactRoutes.js'
import { createblogRoutes } from './routes/createblogRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use("/createcontact", contactRoutes);
app.use("/createBlog", createblogRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/blog_app");

app.listen(3000, () => console.log("Server is running"));