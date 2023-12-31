import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true, unique: true }
});

export const contactModel = mongoose.model("contact", contactSchema);