const OpenAI = require('openai');
require('dotenv').config(); // Load environment variables


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Handler to create a chat completion
async function generateChatResponse(req, res) {
    try {
      const { message } = req.body;
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        max_tokens: 100,
        temperature: 0.7,
      });
      res.json({ message: completion.choices[0].message.content });
    } catch (error) {
      console.error('Error generating chat response:', error);
      res.status(500).json({ error: 'Failed to generate response' });
    }
  }

  module.exports = { generateChatResponse };  