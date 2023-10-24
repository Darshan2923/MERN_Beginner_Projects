import mongoose from "mongoose";

const createblogSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true, min: 6, max: 20 },
    author: { type: String, required: true, min: 3, max: 15 },
    content: { type: String, required: true },
})

export const createblogModel = mongoose.model("createBlog", createblogSchema);