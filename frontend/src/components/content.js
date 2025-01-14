let chatState = {
    messages: [],
    isActive: false
};

function renderContent(selectedTab) {
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = '';

    if (selectedTab === 'page1') {
        // Create chat container structure
        const chatContainer = document.createElement('div');
        chatContainer.className = 'chat-container';

        // Create chat display with initial hidden state
        const chatDisplay = document.createElement('div');
        chatDisplay.className = 'chat-display';
        chatDisplay.style.display = 'none'; // Initially hidden
                
        // Create input area
        const inputArea = document.createElement('div');
        inputArea.className = 'chat-input-area';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'chat-input';
        input.placeholder = 'Type your message...';
        
        const sendButton = document.createElement('button');
        sendButton.className = 'chat-send-button';
        sendButton.textContent = 'Send';
        
        // Assemble the structure
        inputArea.appendChild(input);
        inputArea.appendChild(sendButton);
        chatContainer.appendChild(chatDisplay);
        chatContainer.appendChild(inputArea);
        contentArea.appendChild(chatContainer);
    } else if (selectedTab === 'page2') {
        contentArea.innerHTML = '<h1>Page 2</h1><p>This is the content for Page 2.</p>';
    } else if (selectedTab === 'page3') {
        contentArea.innerHTML = '<h1>Page 3</h1><p>This is the content for Page 3.</p>';
    } else if (selectedTab === 'page4') {
        contentArea.innerHTML = '<h1>Page 4</h1><p>This is the content for Page 4.</p>';
    }
}

function updateHeader() {
    const header = document.querySelector('.chat-header h2');
    if (!header) return;

    if (!chatContext.isActive) {
        header.textContent = 'How can I help you today?';
        return;
    }

    if (chatContext.messageCount === 0) {
        header.textContent = 'Start a new conversation';
    } else {
        header.textContent = chatContext.lastTopic || 'Continuing our conversation...';
    }
}

function handleNewMessage(message) {
    chatContext.messageCount++;
    chatContext.isActive = true;
    chatContext.lastTopic = message.substring(0, 50) + (message.length > 50 ? '...' : '');
    updateHeader();
}


export default renderContent;