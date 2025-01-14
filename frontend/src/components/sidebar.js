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

    const tab3 = document.createElement('li');
    tab3.innerText = 'Page 3';
    tab3.onclick = () => switchTab('page3');

    const tab4 = document.createElement('li');
    tab4.innerText = 'Page 4';
    tab4.onclick = () => switchTab('page4');


    ul.appendChild(tab1);
    ul.appendChild(tab2);
    ul.appendChild(tab3);
    ul.appendChild(tab4);

    sidebar.appendChild(ul);

    return sidebar;
}

export default createSidebar;