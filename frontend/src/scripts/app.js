import createSidebar from '../components/sidebar.js';
import renderContent from '../components/content.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar
    createSidebar(); // Directly call to modify the DOM
    
    // Initialize content
    renderContent('page1');
});

async function sendMessage(message) {
    try {
        const response = await fetch('http://localhost:3000/api/chat', { // Ensure this matches the backend port
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Handle the response from OpenAI
        displayMessage(data);
    } catch (error) {
        console.error('Error:', error);
        // Optionally, display an error message in the UI
    }
}

document.querySelector('.chat-send-button').addEventListener('click', () => {
    const input = document.querySelector('.chat-input').value;
    sendMessage(input);
});