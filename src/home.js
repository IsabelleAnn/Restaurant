export function loadHomePage(container, homeContainer) {


    container.appendChild(homeContainer);
    const title = document.createElement('h1');
    title.textContent = 'Alamo';
    homeContainer.appendChild(title);

    const heading = document.createElement('h3');
    heading.textContent = 'Tex-Mex Restaurant';
    homeContainer.appendChild(heading);


}