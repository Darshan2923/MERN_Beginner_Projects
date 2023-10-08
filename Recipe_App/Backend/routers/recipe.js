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

//routes to add saved recipes into the db
router.put("/", async (req, res) => {
    try {
        const recipe = await RecipesModel.findByID(req.body.recipeID);
        const user = await UserModel.findByID(req.body.userID);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({ savedRecipes: user.savedRecipes })
    } catch (err) { res.json(err) };
});

router.get("/savedRecipes/:id", async (req, res) => {
    try {
        const user = await UserModel.findByID(req.body.userID);
        res.json({ savedRecipes: user?.savedRecipes });
    } catch (err) {
        res.json(err);
    }
});

router.get("/savedRecipes", async (req, res) => {
    try {
        const user = await UserModel.findByID(req.body.userID);
        const savedRecipes = await RecipesModel.find({
            _id: { $in: user.savedRecipes },
        });
        res.json({ savedRecipes });
    } catch (err) {
        res.json(err);
    }
});

export { router as recipesRouter }; 