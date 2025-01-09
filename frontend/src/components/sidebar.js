function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    const ul = document.createElement('ul');

    const tab1 = document.createElement('li');
    tab1.innerText = 'Page 1';
    tab1.onclick = () => switchTab('page1');

    const tab2 = document.createElement('li');
    tab2.innerText = 'Page 2';
    tab2.onclick = () => switchTab('page2');

    ul.appendChild(tab1);
    ul.appendChild(tab2);
    sidebar.appendChild(ul);

    return sidebar;
}