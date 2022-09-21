import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';

const content = document.getElementById('content');

function createNav() {
    const header = document.querySelector('header');
    const headerImg = document.createElement('img');
    headerImg.src = 'images/Alamo-Logo-Web-Header.png';
    headerImg.classList.add('header-img');
    header.appendChild(headerImg);

    const nav = document.createElement('div');
    nav.classList.add('nav');

    header.appendChild(nav);

    const homeBtn = document.createElement('div');
    homeBtn.setAttribute('id', 'home');
    homeBtn.setAttribute('class', 'navlink');
    homeBtn.textContent = "Home";

    const menuBtn = document.createElement('div');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.setAttribute('class', 'navlink');
    menuBtn.textContent = "Menu";

    const contactBtn = document.createElement('div');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.setAttribute('class', 'navlink');
    contactBtn.textContent = "Contact";

    homeBtn.addEventListener('click', toggleActiveContent);
    menuBtn.addEventListener('click', toggleActiveContent);
    contactBtn.addEventListener('click', toggleActiveContent);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
}

function toggleActiveContent(e) {
    const buttons = document.querySelectorAll('.navlink');
    buttons.forEach((button) => {
        if (button.id !== e.target.id) {
            document.querySelector(`.${button.id}-container`).classList.add('hidden');
        } else {
            document.querySelector(`.${button.id}-container`).classList.remove('hidden');
        }
    });
}

createNav();
loadHomePage();
loadMenuPage();
loadContactPage();

export { content };