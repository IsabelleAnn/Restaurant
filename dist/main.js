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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage(container, contactContainer) {\n\n    container.appendChild(contactContainer);\n    const title = document.createElement('h1');\n    title.textContent = \"Contact\";\n    title.classList.add('page-title');\n    contactContainer.appendChild(title);\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage(container, homeContainer) {\n\n    container.appendChild(homeContainer);\n\n    const slogan = document.createElement('p');\n    slogan.textContent = \"Taco night is here.\";\n    slogan.classList.add('home-text');\n    homeContainer.appendChild(slogan);\n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst header = document.querySelector('header');\nconst headerImg = document.createElement('img');\nheaderImg.src = 'images/Alamo-Logo-Web-Header.png';\nheaderImg.classList.add('header-img');\nheader.appendChild(headerImg);\n\nconst container = document.getElementById('content');\n\nconst homeContainer = document.createElement('div');\nhomeContainer.classList.add('home-container');\ncontainer.appendChild(homeContainer);\n\nconst menuContainer = document.createElement('div');\nmenuContainer.classList.add('menu-container');\nmenuContainer.classList.add('hidden');\n\nconst contactContainer = document.createElement('div');\ncontactContainer.classList.add('contact-container');\ncontactContainer.classList.add('hidden');\n\nconst nav = document.createElement('div');\nnav.classList.add('nav');\nheader.appendChild(nav);\n\ncreateNavbar();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)(container, homeContainer);\n(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)(container, menuContainer);\n(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)(container, contactContainer);\n\nfunction createNavbar() {\n    const homeBtn = document.createElement('div');\n    homeBtn.setAttribute('id', 'home');\n    homeBtn.setAttribute('class', 'navlink');\n    homeBtn.textContent = \"Home\";\n    homeBtn.addEventListener('click', () => {\n        homeContainer.classList.remove('hidden');\n        menuContainer.classList.add('hidden');\n        contactContainer.classList.add('hidden');\n    });\n\n    const menuBtn = document.createElement('div');\n    menuBtn.setAttribute('id', 'menu');\n    menuBtn.setAttribute('class', 'navlink');\n    menuBtn.textContent = \"Menu\";\n    menuBtn.addEventListener('click', () => {\n        homeContainer.classList.add('hidden');\n        menuContainer.classList.remove('hidden');\n        contactContainer.classList.add('hidden');\n    });\n\n    const contactBtn = document.createElement('div');\n    contactBtn.setAttribute('id', 'contact');\n    contactBtn.setAttribute('class', 'navlink');\n    contactBtn.textContent = \"Contact\";\n    contactBtn.addEventListener('click', () => {\n        homeContainer.classList.add('hidden');\n        menuContainer.classList.add('hidden');\n        contactContainer.classList.remove('hidden');\n    });\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n}\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage(container, menuContainer) {\n\n    const listContainer = document.createElement('div');\n    const titleContainer = document.createElement('div');\n    const title = document.createElement('h1');\n\n    title.textContent = 'All-Day Menu';\n\n    listContainer.classList.add('list-container');\n    titleContainer.classList.add('title-container');\n    title.classList.add('page-title');\n\n    container.appendChild(menuContainer);\n    menuContainer.appendChild(titleContainer);\n    menuContainer.appendChild(listContainer);\n    titleContainer.appendChild(title);\n\n\n    const itemList = [{ itemName: 'Queso', itemDescription: 'Spiked with Black Beans, Pico de Gallo & Guacamole', itemPrice: '$5', itemImgSrc: 'images/queso.png' }, { itemName: 'Guacamole', itemDescription: 'Fresh Avocados Blended with Jalapeño, Onion, Cilantro, Tomato & Lemon', itemPrice: '$3', itemImgSrc: 'images/guacamole.jpg' }, { itemName: 'Tacos', itemDescription: 'Tortillas Filled with Beef Picadillo, Pico, Jack Cheese & Shredded Lettuce', itemPrice: '$7', itemImgSrc: 'images/tacos.png' }, { itemName: 'Tostadas', itemDescription: 'Two Crispy Tortillas Topped with Black Beans, Red Cabbage, Guacamole, Pico, Jack Cheese, Queso Fresco', itemPrice: '$12', itemImgSrc: 'images/tostadas.jpg' }, { itemName: 'Enchiladas Classicas', itemDescription: 'Ancho Chile Sauce, Jack Cheese & Diced Onion with Your Choice of Filling (Beef / Chicken / Cheese / Hongos)', itemPrice: '$16', itemImgSrc: 'images/enchiladas.jpg' }, { itemName: 'Mojo Pollo', itemDescription: 'Cuban Mojo Marinated Grilled Chicken on Green Chile Onion Rajas', itemPrice: '$19', itemImgSrc: 'images/mojo-pollo.jpg' }, { itemName: 'Hongos', itemDescription: 'Texas Mushroom Trio with Caramelized Onion & Green Chile Rajas', itemPrice: '$19', itemImgSrc: 'images/hongos.jpg' }, { itemName: 'Pork Green Chile', itemDescription: 'Tender Pork Shoulder Braised with Roasted Green Chiles and Tomatillos', itemPrice: '$20', itemImgSrc: 'images/pork-green-chile.jpeg' }, { itemName: 'Eldorito Pie', itemDescription: 'Homemade Fried Corn Chips Topped with Carne Guisada, Chile Con Queso, Jack Cheese, Guacamole, Pico, Sour Cream, and a Serrano Toreado', itemPrice: '$12', itemImgSrc: 'images/eldorito-pie.jpg' }, { itemName: 'Flan', itemDescription: 'Traditional Vanilla Custard with Sugar Caramel', itemPrice: '$7', itemImgSrc: 'images/flan.jpg' }];\n    itemList.forEach(item => {\n        const itemContainer = document.createElement('div');\n        const detailsContainer = document.createElement('div');\n        const descriptionContainer = document.createElement('div');\n        const namePriceContainer = document.createElement('div');\n\n        const name = document.createElement('h3');\n        const description = document.createElement('p');\n        const price = document.createElement('h3');\n        const image = document.createElement('img');\n\n\n        name.textContent = item.itemName;\n        description.textContent = item.itemDescription;\n        price.textContent = item.itemPrice;\n        image.src = item.itemImgSrc;\n\n        itemContainer.classList.add('item-container');\n        namePriceContainer.classList.add('name-price-container');\n        descriptionContainer.classList.add('description-container');\n        detailsContainer.classList.add('details-container');\n        name.classList.add('item-name');\n        description.classList.add('item-description');\n        price.classList.add('item-price');\n        image.classList.add('item-image');\n\n        listContainer.appendChild(itemContainer);\n        itemContainer.appendChild(image);\n        itemContainer.appendChild(detailsContainer);\n\n        detailsContainer.appendChild(namePriceContainer);\n        detailsContainer.appendChild(descriptionContainer);\n        namePriceContainer.appendChild(name);\n        namePriceContainer.appendChild(price);\n        descriptionContainer.appendChild(description);\n    });\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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