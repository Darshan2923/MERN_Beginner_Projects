import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

app.

    mongoose.connect("mongodb://27017.0.0.1:27017/blog_app");

app.listen(3000, () => console.log("Server is running"));