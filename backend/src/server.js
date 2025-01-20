
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const apiRoutes = require('./routes/api'); // Drop the .js extensio

dotenv.config(); // Loads environment variables

const app = express();
const PORT = process.env.PORT || 3000; // Ensure it's set to 3000 or matches your config


// Define allowed origins
const allowedOrigins = [
    'http://127.0.0.1:8080', // Frontend origin using IP
    'http://localhost:8080', // Frontend origin using localhost
    'http://localhost:3000'  // Backend origin
];

// CORS configuration applied to the server
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS')); // Reject requests from disallowed origins
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Accept'], // Allow specific headers
    credentials: true, // Allow credentials
    optionsSuccessStatus: 200 // Status code for successful OPTIONS requests
}));


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});