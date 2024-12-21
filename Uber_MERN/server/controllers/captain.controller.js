import { validationResult } from "express-validator";
import { createCaptain } from "../services/captain.service.js";
import captainModel from "../models/captain.model.js";
import blacklistTokenModel from "../models/blacklistToken.model.js";

export const registerCaptain = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname: { firstname, lastname }, email, password, vehicle } = req.body;

    try {
        // Attempt to create a new captain
        const hashedPassword = await captainModel.hashedPassword(password);

        const captain = await createCaptain({
            firstname,
            lastname,
            email,
            plate: vehicle.plate,
            password: hashedPassword,
            color: vehicle.color,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });

        const token = captain.generateAuthToken();

        // Return the response with the token and captain data
        res.status(201).json({ token, captain });
    } catch (error) {
        // Handle the error gracefully
        if (error.message === 'Email is already in use') {
            return res.status(400).json({ message: error.message });
        }

        // For any other errors, return a generic message
        console.error(error);
        res.status(500).json({ message: "Error registering captain" });
    }
};

export const loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Try to find the captain by email and include the password field
        const captain = await captainModel.findOne({ email }).select('+password');

        // Check if captain exists
        if (!captain) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await captain.comparePassword(password);

        // If passwords don't match
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate an auth token
        const token = captain.generateAuthToken();

        // Set the token as a cookie
        res.cookie('token', token);

        // Return the response with the token and captain data
        res.status(200).json({ token, captain });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in captain" });
    }
};

export const getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
}

export const logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: "Logout successfully" });
}