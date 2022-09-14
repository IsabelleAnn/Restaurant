export function loadHomePage(container, homeContainer) {

    container.appendChild(homeContainer);

    const slogan = document.createElement('p');
    slogan.textContent = "Taco night is here.";
    slogan.classList.add('home-text');
    homeContainer.appendChild(slogan);
}