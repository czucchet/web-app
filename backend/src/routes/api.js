// This file defines the API routes for the backend, handling requests related to the AI application.

const express = require('express');
const router = express.Router();
const { generateChatResponse } = require('../controllers/chatController');


router.post('/chat', generateChatResponse);

module.exports = router;