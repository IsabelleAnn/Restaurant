export function loadHomePage(container) {
    const title = document.createElement('h1');
    title.textContent = 'Alamo';
    container.appendChild(title);

    const heading = document.createElement('h3');
    heading.textContent = 'Tex-Mex Restaurant';
    container.appendChild(heading);

    const logo = document.createElement('img');
    logo.src = '/src/images/logo.png';
    container.appendChild(logo);
}