export function loadMenuPage(content) {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    menuContainer.classList.add('hidden');

    const listContainer = document.createElement('div');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'All-Day Menu';

    listContainer.classList.add('list-container');
    titleContainer.classList.add('title-container');
    title.classList.add('page-title');

    content.appendChild(menuContainer);
    menuContainer.appendChild(titleContainer);
    menuContainer.appendChild(listContainer);
    titleContainer.appendChild(title);

    const itemList = [{ itemName: 'Queso', itemDescription: 'Spiked with Black Beans, Pico de Gallo & Guacamole', itemPrice: '$5', itemImgSrc: 'images/queso.png' }, { itemName: 'Guacamole', itemDescription: 'Fresh Avocados Blended with Jalapeño, Onion, Cilantro, Tomato & Lemon', itemPrice: '$3', itemImgSrc: 'images/guacamole.jpg' }, { itemName: 'Tacos', itemDescription: 'Tortillas Filled with Beef Picadillo, Pico, Jack Cheese & Shredded Lettuce', itemPrice: '$7', itemImgSrc: 'images/tacos.png' }, { itemName: 'Tostadas', itemDescription: 'Two Crispy Tortillas Topped with Black Beans, Red Cabbage, Guacamole, Pico, Jack Cheese, Queso Fresco', itemPrice: '$12', itemImgSrc: 'images/tostadas.jpg' }, { itemName: 'Enchiladas Classicas', itemDescription: 'Ancho Chile Sauce, Jack Cheese & Diced Onion with Your Choice of Filling (Beef / Chicken / Cheese / Hongos)', itemPrice: '$16', itemImgSrc: 'images/enchiladas.jpg' }, { itemName: 'Mojo Pollo', itemDescription: 'Cuban Mojo Marinated Grilled Chicken on Green Chile Onion Rajas', itemPrice: '$19', itemImgSrc: 'images/mojo-pollo.jpg' }, { itemName: 'Hongos', itemDescription: 'Texas Mushroom Trio with Caramelized Onion & Green Chile Rajas', itemPrice: '$19', itemImgSrc: 'images/hongos.jpg' }, { itemName: 'Pork Green Chile', itemDescription: 'Tender Pork Shoulder Braised with Roasted Green Chiles and Tomatillos', itemPrice: '$20', itemImgSrc: 'images/pork-green-chile.jpeg' }, { itemName: 'Eldorito Pie', itemDescription: 'Homemade Fried Corn Chips Topped with Carne Guisada, Chile Con Queso, Jack Cheese, Guacamole, Pico, Sour Cream, and a Serrano Toreado', itemPrice: '$12', itemImgSrc: 'images/eldorito-pie.jpg' }, { itemName: 'Flan', itemDescription: 'Traditional Vanilla Custard with Sugar Caramel', itemPrice: '$7', itemImgSrc: 'images/flan.jpg' }];
    itemList.forEach(item => {
        const itemContainer = document.createElement('div');
        const detailsContainer = document.createElement('div');
        const descriptionContainer = document.createElement('div');
        const namePriceContainer = document.createElement('div');

        const name = document.createElement('h3');
        const description = document.createElement('p');
        const price = document.createElement('h3');
        const image = document.createElement('img');

        name.textContent = item.itemName;
        description.textContent = item.itemDescription;
        price.textContent = item.itemPrice;
        image.src = item.itemImgSrc;

        itemContainer.classList.add('item-container');
        namePriceContainer.classList.add('name-price-container');
        descriptionContainer.classList.add('description-container');
        detailsContainer.classList.add('details-container');
        name.classList.add('item-name');
        description.classList.add('item-description');
        price.classList.add('item-price');
        image.classList.add('item-image');

        listContainer.appendChild(itemContainer);
        itemContainer.appendChild(image);
        itemContainer.appendChild(detailsContainer);

        detailsContainer.appendChild(namePriceContainer);
        detailsContainer.appendChild(descriptionContainer);
        namePriceContainer.appendChild(name);
        namePriceContainer.appendChild(price);
        descriptionContainer.appendChild(description);
    });
}