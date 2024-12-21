import express from 'express';
import { body } from 'express-validator';
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from '../controllers/captain.controller.js';
import { authCaptain } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("FirstName must be at least of 3 characters"),
    body('password').isLength({ min: 6 }).withMessage("Password should be atleast of 6 characters"),
    body('vehicle.color').isLength({ min: 3 }).withMessage("Color should be of atleast 3 characters"),
    body('vehicle.plate').isLength({ min: 3 }).withMessage("Plate number should be atleast of 3 characters"),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage("Capacity should be atleast be 1 passenger"),
    body("vehicle.vehicleType").isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid type')
], registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 6 }).withMessage("Password should be atleast of 6 characters")
],
    loginCaptain);

router.get('/profile', authCaptain, getCaptainProfile);

router.get('/logout', authCaptain, logoutCaptain);

export default router;