import express from "express";
import mongoose from "mongoose";
import { RecipesModel } from "../models/Recipe.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await RecipesModel.find({});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new recipe
router.post("/", async (req, res) => {
    const recipe = new RecipesModel(req.body);
    console.log(recipe);

    try {
        const result = await recipe.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

export { router as recipesRouter }; 