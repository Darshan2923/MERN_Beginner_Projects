import mongoose, { mongo } from "mongoose";

const BookSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    bookImg: { type: String, required: true },
    price: { type: Number }
});

export const bookModel = mongoose.model("books", BookSchema);