function renderContent(selectedTab) {
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = '';

    if (selectedTab === 'page1') {
        // Create chat container structure
        const chatContainer = document.createElement('div');
        chatContainer.className = 'chat-container';

        // Create chat display
        const chatDisplay = document.createElement('div');
        chatDisplay.className = 'chat-display';
        
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
    }
}

export default renderContent;