export function loadContactPage(content) {

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.classList.add('hidden');

    const textContainer = document.createElement('div');

    const locationContainer = document.createElement('div');
    const locationTitle = document.createElement('h1');
    const locationDetails = document.createElement('p');

    const contactTextContainer = document.createElement('div');
    const contactTitle = document.createElement('h1');
    const contactDetails = document.createElement('p');

    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('h1');
    const hoursDetails = document.createElement('p');

    locationTitle.textContent = 'Location';
    locationDetails.innerHTML = 'Somewhere Down 4th Ln, <br /> San Antonio, TX 79456';
    contactTitle.textContent = 'Contact Us';
    contactDetails.innerHTML = 'Tel: 123-456-7890 <br /> Email: thealamo@sanantonio.com';
    hoursTitle.textContent = 'Hours';
    hoursDetails.innerHTML = 'Mon - Fri : 9AM - 9PM <br /> Sat - Sun: 9AM - 12AM';

    textContainer.classList.add('contact-page-text-container');

    locationContainer.classList.add('location-container');
    contactTextContainer.classList.add('contact-text-container');
    hoursContainer.classList.add('hours-container');

    locationTitle.classList.add('page-title');
    hoursTitle.classList.add('page-title');
    contactTitle.classList.add('page-title');

    content.appendChild(contactContainer);
    contactContainer.appendChild(textContainer);
    textContainer.appendChild(locationContainer);
    textContainer.appendChild(contactTextContainer);
    textContainer.appendChild(hoursContainer);
    locationContainer.append(locationTitle, locationDetails);
    contactTextContainer.append(contactTitle, contactDetails);
    hoursContainer.append(hoursTitle, hoursDetails);
}