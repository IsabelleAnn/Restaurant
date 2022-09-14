export function loadContactPage(container, contactContainer) {

    container.appendChild(contactContainer);
    const title = document.createElement('h1');
    title.textContent = "Contact";
    title.classList.add('page-title');
    contactContainer.appendChild(title);
}