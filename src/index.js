import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';

const container = document.getElementById('content');
loadHomePage(container);


//Write Tab switching logic:
loadMenuPage(container);
loadContactPage(container);