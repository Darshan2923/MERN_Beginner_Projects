import express from 'express';
import cors from 'cors';
import connectToDb from './db/db.js';
import userRoutes from './routes/user.routes.js';
import captainRoutes from './routes/captain.routes.js';
import cookieParser from 'cookie-parser';

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to DB
connectToDb();

// Routes
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);

export default app;
