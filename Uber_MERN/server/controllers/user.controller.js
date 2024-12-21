import express from 'express';
import userModel from '../models/user.model.js';
import { validationResult } from 'express-validator';
import { createUser } from '../services/user.service.js';
import blacklistTokenModel from '../models/blacklistToken.model.js';

export const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname: { firstname, lastname }, email, password } = req.body;

    try {
        // Attempt to hash the password and create a user
        const hashedPassword = await userModel.hashedPassword(password);

        const user = await createUser({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        const token = user.generateAuthToken();

        res.status(201).json({ token, user });
    } catch (error) {
        // Handle duplicate email error
        if (error.message === 'Email is already in use') {
            return res.status(401).json({ message: error.message });
        }

        // Log and return a generic server error
        console.error(error);
        res.status(500).json({ message: "Error registering user" });
    }
};

export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Attempt to find the user by email and include the password field
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Check if the provided password matches the stored hashed password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate and send an auth token
        const token = user.generateAuthToken();

        res.cookie('token', token);
        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in user" });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        // Send the user profile
        res.status(200).json(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving user profile" });
    }
};

export const logoutUser = async (req, res) => {
    try {
        // Clear the token from cookies
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

        await blacklistTokenModel.create({ token });
        res.clearCookie('token');

        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging out user" });
    }
};
