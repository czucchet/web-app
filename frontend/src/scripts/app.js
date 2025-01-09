import createSidebar from '../components/sidebar.js';
import renderContent from '../components/content.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar
    const sidebarContainer = document.getElementById('sidebar');
    sidebarContainer.appendChild(createSidebar());
    
    // Initialize content
    renderContent('page1');
});