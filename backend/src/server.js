
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api'); // Drop the .js extensio

dotenv.config(); // Loads environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});