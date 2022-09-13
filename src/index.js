import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';

const header = document.querySelector('header');
const headerImg = document.createElement('img');
headerImg.src = 'images/Alamo-Logo-Web-Header.png';
headerImg.classList.add('header-img');
header.appendChild(headerImg);

const container = document.getElementById('content');

//Creates Home Container
const homeContainer = document.createElement('div');
homeContainer.classList.add('home-container');
container.appendChild(homeContainer);

//Creates Menu Container
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
menuContainer.classList.add('hidden');

//Creates Contact Container
const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');
contactContainer.classList.add('hidden');

const nav = document.createElement('div');
nav.classList.add('nav');
header.appendChild(nav);

createNavbar();
loadHomePage(container, homeContainer);
loadMenuPage(container, menuContainer);
loadContactPage(container, contactContainer);

function createNavbar() {
    const homeBtn = document.createElement('div');
    homeBtn.setAttribute('id', 'home');
    homeBtn.setAttribute('class', 'navlink');
    homeBtn.textContent = "Home";
    homeBtn.addEventListener('click', () => {
        homeContainer.classList.remove('hidden');
        menuContainer.classList.add('hidden');
        contactContainer.classList.add('hidden');
    });

    const menuBtn = document.createElement('div');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.setAttribute('class', 'navlink');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener('click', () => {
        homeContainer.classList.add('hidden');
        menuContainer.classList.remove('hidden');
        contactContainer.classList.add('hidden');
    });

    const contactBtn = document.createElement('div');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.setAttribute('class', 'navlink');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener('click', () => {
        homeContainer.classList.add('hidden');
        menuContainer.classList.add('hidden');
        contactContainer.classList.remove('hidden');
    });

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
}