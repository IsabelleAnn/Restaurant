export function loadMenuPage(container) {
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    container.appendChild(title);
    const itemList = [{ itemName: 'Fruit Bowl', itemDescription: 'A small bowl of fresh fruit', itemPrice: '$3', itemImgSrc: '/src/images/logo.png' }];
    console.log(itemList);
}