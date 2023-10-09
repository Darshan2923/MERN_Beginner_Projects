import express from 'express';
import { bookModel } from '../models/bookModel.js';

const router = new express.Router();

router.post("/", async (req, res) => {
    const books = new bookModel(req.body);
    console.log(books);

    try {
        const result = await books.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const result = await bookModel.find({});
        res.json(result);

    } catch (error) {
        res.json(error);
    }

})

export { router as bookRoutes }