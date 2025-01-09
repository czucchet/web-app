// This file defines the API routes for the backend, handling requests related to the AI application.

const express = require('express');
const router = express.Router();
const { getAIData } = require('../controllers/index');

// Define a route for getting AI data
router.get('/ai', async (req, res) => {
    try {
        const data = await getAIData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving AI data', error });
    }
});

module.exports = router;