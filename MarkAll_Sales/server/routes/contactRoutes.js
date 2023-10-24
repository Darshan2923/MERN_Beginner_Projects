import express from 'express';
import { contactModel } from '../models/contactModel.js'

const routes = new express.Router();
routes.post('/', async (req, res) => {
    const createcontact = new contactModel(req.body);
    console.log(createcontact);
    try {
        const result = await createcontact.save();
        res.status(201).json(result);

    } catch (error) {
        res.status(400).json(error);
    }
});

export { routes as contactRoutes }