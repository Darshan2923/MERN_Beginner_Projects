import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from './app.js';

// Set the port
const port = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
