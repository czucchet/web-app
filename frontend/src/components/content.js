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
    // ... rest of chat container creation code ...
    return chatContainer;
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