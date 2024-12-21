import userModel from "../models/user.model.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    // Check if the email is already in use
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error('Email is already in use');
    }

    const user = await userModel.create({
        fullname: {
            firstname, lastname
        },
        email,
        password
    })

    return user;
}