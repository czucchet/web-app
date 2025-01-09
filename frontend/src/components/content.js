function renderContent(selectedTab) {
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = '';

    if (selectedTab === 'page1') {
        contentArea.innerHTML = '<h1>Page 1</h1><p>This is the content for Page 1.</p>';
    } else if (selectedTab === 'page2') {
        contentArea.innerHTML = '<h1>Page 2</h1><p>This is the content for Page 2.</p>';
    }

    // Central space for AI application
    const aiAppSpace = document.createElement('div');
    aiAppSpace.id = 'ai-app';
    aiAppSpace.innerHTML = '<p>This is the central space for the AI application.</p>';
    contentArea.appendChild(aiAppSpace);
}

export default renderContent;