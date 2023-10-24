import express from 'express';
import { createblogModel } from '../models/createblogModel.js';

const router = express.Router();

router.post("/", async (req, res) => {
    const createblog = new createblogModel(req.body);
    console.log(createblog);
    try {
        const result = await createblog.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(401).json(err);
    }
});

export { router as createblogRoutes }