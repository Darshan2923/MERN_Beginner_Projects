import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true, unique: true }
});

export const blogModel = mongoose.model("blog", blogSchema);