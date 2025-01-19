import createSidebar from '../components/sidebar.js';
import renderContent from '../components/content.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar
    createSidebar(); // Directly call to modify the DOM
    
    // Initialize content
    renderContent('page1');
});