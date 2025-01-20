let chatState = {
    messages: [],
    isActive: false
};

function renderContent(selectedTab) {
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = '';

    switch(selectedTab) {
        case 'page1':

        // Create chat container
            const chatContainer = createChatContainer();
            contentArea.appendChild(chatContainer);
            break;
        case 'page2':
            contentArea.innerHTML = '<h1>Page 2</h1><p>This is the content for Page 2.</p>';
            break;
        case 'page3':
            contentArea.innerHTML = '<h1>Page 3</h1><p>This is the content for Page 3.</p>';
            break;
        case 'page4':
            contentArea.innerHTML = '<h1>Page 4</h1><p>This is the content for Page 4.</p>';
            break;
    }
}


function createChatContainer() {
    // Create chat container structure
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';

    // Create chat header
    const chatHeader = document.createElement('header');
    chatHeader.className = 'chat-header';
    chatHeader.innerHTML = '<h2>How can I help you today?</h2>';
    chatContainer.appendChild(chatHeader);

    // Create chat display area
    const chatDisplay = document.createElement('div');
    chatDisplay.className = 'chat-display';
    chatContainer.appendChild(chatDisplay);

    // Create chat input area
    const chatInputArea = document.createElement('div');
    chatInputArea.className = 'chat-input-area';

    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.className = 'chat-input';
    chatInput.placeholder = 'Type your message...';

    const chatSendButton = document.createElement('button');
    chatSendButton.className = 'chat-send-button';
    chatSendButton.setAttribute('aria-label', 'Send message');
    chatSendButton.innerText = 'Send';

    // Add event listener for sending messages
    chatSendButton.onclick = () => sendMessage(chatInput.value, chatDisplay);

    chatInputArea.appendChild(chatInput);
    chatInputArea.appendChild(chatSendButton);
    chatContainer.appendChild(chatInputArea);

    return chatContainer;

}

// Update error handling in sendMessage function
async function sendMessage(message, chatDisplay) {
    if (!message.trim()) return;

    try {
        // Show loading state
        const loadingMessage = document.createElement('div');
        loadingMessage.className = 'chat-message loading-message';
        loadingMessage.innerText = 'Loading...';
        chatDisplay.appendChild(loadingMessage);

        const response = await sendMessageToBackend(message);
        
        // Remove loading message
        loadingMessage.remove();

        // Display AI's response
        const aiMessage = document.createElement('div');
        aiMessage.className = 'chat-message incoming-message';
        aiMessage.innerText = response.message;
        chatDisplay.appendChild(aiMessage);

        handleNewMessage(message);
    } catch (error) {
        // Handle error state
        const errorMessage = document.createElement('div');
        errorMessage.className = 'chat-message error-message';
        errorMessage.innerText = 'Error: Could not send message. Please try again.';
        chatDisplay.appendChild(errorMessage);
        console.error('Error:', error);
    }
}

async function sendMessageToBackend(message) {
    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            credentials: 'same-origin', // Changed from 'include' to 'same-origin'
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            message: data.choices?.[0]?.message?.content || 'No response from AI'
        };
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message. Please try again.');
    }
}

function updateHeader() {
    const header = document.querySelector('.chat-header h2');
    if (!header) return;

    if (!chatState.isActive) {
        header.textContent = 'How can I help you today?';
        return;
    }

    if (chatState.messageCount === 0) {
        header.textContent = 'Start a new conversation';
    } else {
        header.textContent = chatState.lastTopic || 'Continuing our conversation...';
    }
}

function handleNewMessage(message) {
    chatState.messages.push({ content: message });
    chatState.isActive = true;
    updateHeader();
}

export default renderContent;