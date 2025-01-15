const { OpenAI } = require('openai');
require('dotenv').config();

// Simple test to check OpenAI connection
async function testOpenAIConnection() {
    console.log('Testing OpenAI API connection...');
    
    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Hello" }],
            max_tokens: 5
        });
        
        if (response.choices[0].message) {
            console.log('✅ OpenAI API connection successful');
            return true;
        }
    } catch (error) {
        console.error('❌ OpenAI API connection failed:', error.message);
        return false;
    }
}

// Run the test
testOpenAIConnection();