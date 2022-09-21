export function loadHomePage(content) {

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    content.appendChild(homeContainer);

    const buttonL = document.createElement('img');
    buttonL.src = 'images/arrow.png';
    buttonL.classList.add('left-arrow');
    const buttonR = document.createElement('img');
    buttonR.src = 'images/arrow.png';
    buttonR.classList.add('right-arrow');

    const backgroundImages = ['images/tacos.png', 'images/queso.png', 'images/mojo-pollo.jpg', 'images/tostadas.jpg', 'images/contact-background.jpg'];
    let slideIndex = 0;
    homeContainer.style.backgroundImage = `url(${backgroundImages[0]})`;
    buttonL.addEventListener('click', slideImagesRightToLeft);
    buttonR.addEventListener('click', slideImagesLeftToRight);

    function slideImagesLeftToRight() {
        if (slideIndex < backgroundImages.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        homeContainer.style.backgroundImage = `url(${backgroundImages[slideIndex]})`;
    }

    function slideImagesRightToLeft() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = backgroundImages.length - 1;
        }
        homeContainer.style.backgroundImage = `url(${backgroundImages[slideIndex]})`;
    }

    const slogan = document.createElement('p');
    slogan.textContent = "Taco night is here.";
    slogan.classList.add('home-text');

    homeContainer.appendChild(buttonL);
    content.appendChild(homeContainer);
    homeContainer.appendChild(slogan);
    homeContainer.appendChild(buttonR);
}