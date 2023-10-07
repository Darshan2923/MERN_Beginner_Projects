import express from "express";
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/recipe_data");

app.listen(3001, () => console.log("Server is running"))