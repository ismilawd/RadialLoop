/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/radial-slideshow.js":
/*!*********************************!*\
  !*** ./src/radial-slideshow.js ***!
  \*********************************/
/***/ (() => {

eval("class RadialSlideShow {\r\n    /**\r\n     * \r\n     * @param {{\r\n     * itemsPerView: number,\r\n     * container:HTMLElement,\r\n     * items:[],\r\n     * sliderWidth:number,\r\n     * sliderHeight:number,\r\n     * itemWidth:number,\r\n     * offsetTop:number,\r\n     * offsetLeft:number,\r\n     * interval:number\r\n     * }} options \r\n     */\r\n    constructor(options) {\r\n        this.options = options;\r\n        this.currentItemIndex = 0;\r\n\r\n        const deg = parseFloat(360) / parseFloat(this.options.itemsPerView);\r\n        const ratio = options.sliderWidth / options.sliderWidth;\r\n        const offsetLeft = (options.container.clientWidth / 2) - (options.sliderWidth / 2);\r\n        const offsetTop = (options.container.clientHeight / 2) - (options.sliderHeight / 2);\r\n\r\n        //setup first items\r\n        for (let i = 0; i < this.options.itemsPerView; i++) {\r\n            let cdeg = parseFloat(360) - (parseFloat(i) * deg);\r\n            let elem = this.createItemElement(this.requestNextItem(), cdeg);\r\n\r\n            let tr = Math.sin(cdeg * Math.PI / parseFloat(180));\r\n            let lr = Math.cos(cdeg * Math.PI / parseFloat(180));\r\n            let top = (tr * (options.sliderHeight / 2));\r\n            let left = (options.sliderWidth / 2) + (lr * (options.sliderWidth / 2));\r\n            top = (options.sliderHeight / 2) - top;\r\n            top *= ratio;\r\n            left -= options.itemWidth / 2;\r\n            top -= options.itemWidth / 2;\r\n\r\n            left += offsetLeft;\r\n            top += offsetTop;\r\n\r\n            if (options.offsetLeft)\r\n                left += options.offsetLeft;\r\n\r\n            if (options.offsetTop)\r\n                top += options.offsetTop;\r\n\r\n            elem.style.left = left + \"px\";\r\n            elem.style.top = top + \"px\";\r\n            this.options.container.prepend(elem);\r\n        }\r\n        setInterval(() => {\r\n            let items = this.options.container.querySelectorAll(\".slide-item\");\r\n\r\n            for (let i = 0; i < items.length; i++) {\r\n                let item = items[i];\r\n                let ideg = parseFloat(item.getAttribute(\"deg\"));\r\n                ideg += 0.1;\r\n\r\n                let tr = Math.sin(ideg * Math.PI / 180);\r\n                let lr = Math.cos(ideg * Math.PI / 180);\r\n                let top = (tr * (options.sliderHeight / 2));\r\n                let left = (options.sliderWidth / 2) + (lr * (options.sliderWidth / 2));\r\n                top = (options.sliderHeight / 2) - top;\r\n                top *= ratio;\r\n                left -= options.itemWidth / 2;\r\n                top -= options.itemWidth / 2;\r\n\r\n                left += offsetLeft;\r\n                top += offsetTop;\r\n\r\n                if (options.offsetLeft)\r\n                    left += options.offsetLeft;\r\n\r\n                if (options.offsetTop)\r\n                    top += options.offsetTop;\r\n\r\n                item.style.left = left + \"px\";\r\n                item.style.top = top + \"px\";\r\n                item.setAttribute(\"deg\", ideg);\r\n            }\r\n        }, options.interval ?? 5);\r\n    }\r\n\r\n    /**\r\n     * @param {{}} item \r\n     * @returns {HTMLDivElement}\r\n     */\r\n    createItemElement(item, deg) {\r\n        let div = document.createElement(\"div\");\r\n        div.classList.add(\"slide-item\");\r\n        div.setAttribute(\"deg\", deg);\r\n        let img = document.createElement(\"img\");\r\n        img.src = item.image;\r\n        div.appendChild(img);\r\n        return div;\r\n    }\r\n\r\n    requestNextItem() {\r\n        let item = this.options.items[this.currentItemIndex];\r\n        this.currentItemIndex++;\r\n        if (this.currentItemIndex === this.options.items.length)\r\n            this.currentItemIndex = 0;\r\n        return item;\r\n    }\r\n}\r\nwindow.RadialSlideShow = RadialSlideShow;\n\n//# sourceURL=webpack://radial-loop/./src/radial-slideshow.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/radial-slideshow.js"]();
/******/ 	
/******/ })()
;