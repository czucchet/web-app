
function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    const ul = document.createElement('ul');

    const tabs = [
        { id: 'tab1', name: 'Page 1' },
        { id: 'tab2', name: 'Page 2' },
        { id: 'tab3', name: 'Page 3' },
        { id: 'tab4', name: 'Page 4' }
    ];

    tabs.forEach(tab => {
        const li = document.createElement('li');
        li.id = tab.id;
        li.innerText = tab.name;
        li.onclick = () => switchTab(tab.name.toLowerCase(), li);
        ul.appendChild(li);
    });

    sidebar.appendChild(ul);
    return sidebar;
}

function switchTab(selectedTab, selectedElement) {
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('#sidebar ul li');
    allTabs.forEach(tab => tab.classList.remove('active-tab'));

    // Add active class to the selected tab
    selectedElement.classList.add('active-tab');

    // Render the corresponding content
    renderContent(selectedTab);
}

export default createSidebar;