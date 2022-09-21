/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage(content) {\n\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact-container');\n    contactContainer.classList.add('hidden');\n\n    const textContainer = document.createElement('div');\n\n    const locationContainer = document.createElement('div');\n    const locationTitle = document.createElement('h1');\n    const locationDetails = document.createElement('p');\n\n    const contactTextContainer = document.createElement('div');\n    const contactTitle = document.createElement('h1');\n    const contactDetails = document.createElement('p');\n\n    const hoursContainer = document.createElement('div');\n    const hoursTitle = document.createElement('h1');\n    const hoursDetails = document.createElement('p');\n\n    locationTitle.textContent = 'Location';\n    locationDetails.innerHTML = 'Somewhere Down 4th Ln, <br /> San Antonio, TX 79456';\n    contactTitle.textContent = 'Contact Us';\n    contactDetails.innerHTML = 'Tel: 123-456-7890 <br /> Email: thealamo@sanantonio.com';\n    hoursTitle.textContent = 'Hours';\n    hoursDetails.innerHTML = 'Mon - Fri : 9AM - 9PM <br /> Sat - Sun: 9AM - 12AM';\n\n    textContainer.classList.add('contact-page-text-container');\n\n    locationContainer.classList.add('location-container');\n    contactTextContainer.classList.add('contact-text-container');\n    hoursContainer.classList.add('hours-container');\n\n    locationTitle.classList.add('page-title');\n    hoursTitle.classList.add('page-title');\n    contactTitle.classList.add('page-title');\n\n    content.appendChild(contactContainer);\n    contactContainer.appendChild(textContainer);\n    textContainer.appendChild(locationContainer);\n    textContainer.appendChild(contactTextContainer);\n    textContainer.appendChild(hoursContainer);\n    locationContainer.append(locationTitle, locationDetails);\n    contactTextContainer.append(contactTitle, contactDetails);\n    hoursContainer.append(hoursTitle, hoursDetails);\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage(content) {\n\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('home-container');\n    content.appendChild(homeContainer);\n\n    const buttonL = document.createElement('img');\n    buttonL.src = 'images/arrow.png';\n    buttonL.classList.add('left-arrow');\n    const buttonR = document.createElement('img');\n    buttonR.src = 'images/arrow.png';\n    buttonR.classList.add('right-arrow');\n\n    const backgroundImages = ['images/tacos.png', 'images/queso.png', 'images/mojo-pollo.jpg', 'images/tostadas.jpg', 'images/contact-background.jpg'];\n    let slideIndex = 0;\n    homeContainer.style.backgroundImage = `url(${backgroundImages[0]})`;\n    buttonL.addEventListener('click', slideImagesRightToLeft);\n    buttonR.addEventListener('click', slideImagesLeftToRight);\n\n    function slideImagesLeftToRight() {\n        if (slideIndex < backgroundImages.length - 1) {\n            slideIndex++;\n        } else {\n            slideIndex = 0;\n        }\n        homeContainer.style.backgroundImage = `url(${backgroundImages[slideIndex]})`;\n    }\n\n    function slideImagesRightToLeft() {\n        if (slideIndex > 0) {\n            slideIndex--;\n        } else {\n            slideIndex = backgroundImages.length - 1;\n        }\n        homeContainer.style.backgroundImage = `url(${backgroundImages[slideIndex]})`;\n    }\n\n    const slogan = document.createElement('p');\n    slogan.textContent = \"Taco night is here.\";\n    slogan.classList.add('home-text');\n\n    homeContainer.appendChild(buttonL);\n    content.appendChild(homeContainer);\n    homeContainer.appendChild(slogan);\n    homeContainer.appendChild(buttonR);\n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst content = document.getElementById('content');\n\nconst createHeader = function createHeader() {\n    const header = document.querySelector('header');\n    const headerImg = document.createElement('img');\n    headerImg.src = 'images/Alamo-Logo-Web-Header.png';\n    headerImg.classList.add('header-img');\n    header.appendChild(headerImg);\n    return header;\n}\n\nconst createNavbar = (function() {\n\n    const nav = document.createElement('div');\n    nav.classList.add('nav');\n\n    createHeader().appendChild(nav);\n\n    const homeBtn = document.createElement('div');\n    homeBtn.setAttribute('id', 'home');\n    homeBtn.setAttribute('class', 'navlink');\n    homeBtn.textContent = \"Home\";\n\n    const menuBtn = document.createElement('div');\n    menuBtn.setAttribute('id', 'menu');\n    menuBtn.setAttribute('class', 'navlink');\n    menuBtn.textContent = \"Menu\";\n\n    const contactBtn = document.createElement('div');\n    contactBtn.setAttribute('id', 'contact');\n    contactBtn.setAttribute('class', 'navlink');\n    contactBtn.textContent = \"Contact\";\n\n    homeBtn.addEventListener('click', toggleActiveContent);\n    menuBtn.addEventListener('click', toggleActiveContent);\n    contactBtn.addEventListener('click', toggleActiveContent);\n\n    function toggleActiveContent(e) {\n        const buttons = document.querySelectorAll('.navlink');\n        buttons.forEach((button) => {\n            if (button.id !== e.target.id) {\n                document.querySelector(`.${button.id}-container`).classList.add('hidden');\n            } else {\n                document.querySelector(`.${button.id}-container`).classList.remove('hidden');\n            }\n        });\n    }\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n})();\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)(content);\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)(content);\n(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)(content);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage(content) {\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n    menuContainer.classList.add('hidden');\n\n    const listContainer = document.createElement('div');\n    const titleContainer = document.createElement('div');\n    const title = document.createElement('h1');\n    title.textContent = 'All-Day Menu';\n\n    listContainer.classList.add('list-container');\n    titleContainer.classList.add('title-container');\n    title.classList.add('page-title');\n\n    content.appendChild(menuContainer);\n    menuContainer.appendChild(titleContainer);\n    menuContainer.appendChild(listContainer);\n    titleContainer.appendChild(title);\n\n    const itemList = [{ itemName: 'Queso', itemDescription: 'Spiked with Black Beans, Pico de Gallo & Guacamole', itemPrice: '$5', itemImgSrc: 'images/queso.png' }, { itemName: 'Guacamole', itemDescription: 'Fresh Avocados Blended with Jalapeño, Onion, Cilantro, Tomato & Lemon', itemPrice: '$3', itemImgSrc: 'images/guacamole.jpg' }, { itemName: 'Tacos', itemDescription: 'Tortillas Filled with Beef Picadillo, Pico, Jack Cheese & Shredded Lettuce', itemPrice: '$7', itemImgSrc: 'images/tacos.png' }, { itemName: 'Tostadas', itemDescription: 'Two Crispy Tortillas Topped with Black Beans, Red Cabbage, Guacamole, Pico, Jack Cheese, Queso Fresco', itemPrice: '$12', itemImgSrc: 'images/tostadas.jpg' }, { itemName: 'Enchiladas Classicas', itemDescription: 'Ancho Chile Sauce, Jack Cheese & Diced Onion with Your Choice of Filling (Beef / Chicken / Cheese / Hongos)', itemPrice: '$16', itemImgSrc: 'images/enchiladas.jpg' }, { itemName: 'Mojo Pollo', itemDescription: 'Cuban Mojo Marinated Grilled Chicken on Green Chile Onion Rajas', itemPrice: '$19', itemImgSrc: 'images/mojo-pollo.jpg' }, { itemName: 'Hongos', itemDescription: 'Texas Mushroom Trio with Caramelized Onion & Green Chile Rajas', itemPrice: '$19', itemImgSrc: 'images/hongos.jpg' }, { itemName: 'Pork Green Chile', itemDescription: 'Tender Pork Shoulder Braised with Roasted Green Chiles and Tomatillos', itemPrice: '$20', itemImgSrc: 'images/pork-green-chile.jpeg' }, { itemName: 'Eldorito Pie', itemDescription: 'Homemade Fried Corn Chips Topped with Carne Guisada, Chile Con Queso, Jack Cheese, Guacamole, Pico, Sour Cream, and a Serrano Toreado', itemPrice: '$12', itemImgSrc: 'images/eldorito-pie.jpg' }, { itemName: 'Flan', itemDescription: 'Traditional Vanilla Custard with Sugar Caramel', itemPrice: '$7', itemImgSrc: 'images/flan.jpg' }];\n    itemList.forEach(item => {\n        const itemContainer = document.createElement('div');\n        const detailsContainer = document.createElement('div');\n        const descriptionContainer = document.createElement('div');\n        const namePriceContainer = document.createElement('div');\n\n        const name = document.createElement('h3');\n        const description = document.createElement('p');\n        const price = document.createElement('h3');\n        const image = document.createElement('img');\n\n        name.textContent = item.itemName;\n        description.textContent = item.itemDescription;\n        price.textContent = item.itemPrice;\n        image.src = item.itemImgSrc;\n\n        itemContainer.classList.add('item-container');\n        namePriceContainer.classList.add('name-price-container');\n        descriptionContainer.classList.add('description-container');\n        detailsContainer.classList.add('details-container');\n        name.classList.add('item-name');\n        description.classList.add('item-description');\n        price.classList.add('item-price');\n        image.classList.add('item-image');\n\n        listContainer.appendChild(itemContainer);\n        itemContainer.appendChild(image);\n        itemContainer.appendChild(detailsContainer);\n\n        detailsContainer.appendChild(namePriceContainer);\n        detailsContainer.appendChild(descriptionContainer);\n        namePriceContainer.appendChild(name);\n        namePriceContainer.appendChild(price);\n        descriptionContainer.appendChild(description);\n    });\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;