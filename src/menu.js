export function loadMenuPage(container, menuContainer) {

    container.appendChild(menuContainer);
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    menuContainer.appendChild(title);
    const itemList = [{ itemName: 'Fruit Bowl', itemDescription: 'A small bowl of fresh fruit', itemPrice: '$3', itemImgSrc: 'images/logo.png' }, { itemName: 'Toast and Jam', itemDescription: 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.', itemPrice: '$1', itemImgSrc: 'images/logo.png' }];
    itemList.forEach(item => {
        const name = document.createElement('h3');
        name.textContent = item.itemName;
        name.classList.add('item-name');
        menuContainer.appendChild(name);

        const description = document.createElement('p');
        description.textContent = item.itemDescription;
        description.classList.add('item-description');
        menuContainer.appendChild(description);

        const price = document.createElement('h3');
        price.textContent = item.itemPrice;
        price.classList.add('item-price');
        menuContainer.appendChild(price);

        const image = document.createElement('img');
        image.src = item.itemImgSrc;
        image.classList.add('item-img');
        menuContainer.appendChild(image);
    });
}