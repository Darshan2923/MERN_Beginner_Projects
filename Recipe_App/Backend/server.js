import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import { userRouter } from "./routers/users.js";
import { recipesRouter } from "./routers/recipe.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/recipe_data");

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);


app.listen(3001, () => console.log("Server is running"));