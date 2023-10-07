import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/Users.js';

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (user) {
        return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username: username });
    if (!user) {
        return res.json({ message: "Username doesn't exists!!!" })
    }
    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
        return res.json({ message: "Please enter valid credentials!!!" })
    }
    // const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
})

export { router as userRouter }