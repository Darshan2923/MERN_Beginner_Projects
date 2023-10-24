import express from 'express';
import { blogModel } from '../models/blogModel.js'

const routes = new express.Router();
routes.post('/', async (req, res) => {
    const createblog = new blogModel(req.body);
    console.log(createblog);
    try {
        const result = await createblog.save();
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error);
    }
});

export { routes as createRoutes }