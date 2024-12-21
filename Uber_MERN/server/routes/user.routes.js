import express from 'express';
import { body } from 'express-validator';
import { getUserProfile, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import { authUser } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long')
],
    registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password length should be atleast 6 characters')
],
    loginUser);

router.get('/profile', authUser, getUserProfile);

router.get('/logout', logoutUser);


export default router;