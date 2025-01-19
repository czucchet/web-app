// frontend/src/components/sidebar.js
import renderContent from './content.js';

function createSidebar() {
    const sidebar = document.getElementById('sidebar'); // Select existing sidebar

    let ul = sidebar.querySelector('ul');
    if (!ul) {
        ul = document.createElement('ul');
        sidebar.appendChild(ul);
    }

    const tabs = [
        { id: 'page1', name: 'Page 1' },
        { id: 'page2', name: 'Page 2' },
        { id: 'page3', name: 'Page 3' },
        { id: 'page4', name: 'Page 4' }
    ];

    // Clear existing li elements to prevent duplication
    ul.innerHTML = '';

    tabs.forEach((tab, index) => {
        const li = document.createElement('li');
        li.id = tab.id;
        li.innerText = tab.name;
        
        // Set first tab as active by default
        if (index === 0) {
            li.classList.add('active-tab');
        }

        li.onclick = () => switchTab(tab.id, li);
        ul.appendChild(li);
    });
}

function switchTab(selectedTab, selectedElement) {
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('#sidebar ul li');
    allTabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // Add active class to selected tab
    selectedElement.classList.add('active-tab');

    // Render content for selected tab
    renderContent(selectedTab);
}

export default createSidebar;