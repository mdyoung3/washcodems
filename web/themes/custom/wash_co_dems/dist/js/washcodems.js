/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./js/washcodems.js ***!
  \**************************/
(function (Drupal, once) {
  'use strict';

  Drupal.behaviors.wash_co_dems_Functions = {
    attach: function attach(context, settings) {

      // Put your common functions and handlers here. For example:
      //
      // const myCommonFunction = (element, event) => {
      //   // Do something.
      // }

      // Put global page behaviors here.
      // It is Drupal's equivalent JQuery's $(document).ready(myInit());
      // Example:
      //
      // once('myGlobalBehaviors', 'html').forEach(() => {
      //   const singleElement = document.getElementById('element-id');
      //   singleElement.addEventListener('click', event => myCommonFunction(singleElement, event));
      //
      //   const multipleElements = document.querySelectorAll('.classname-selector');
      //   multipleElements.forEach(element => {
      //     element.addEventListener('click', event => myCommonFunction(element, event));
      //   });
      // });

      // Put your specific behaviors with Ajax loading support here. For example:
      //
      // once('mySpecificBehavior', '.classname-selector', context).forEach(element => {
      //   element.addEventListener('click', event => myCommonFunction(element, event));
      // });
    }
  };
})(Drupal, once);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./scss/washcodems.scss ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=washcodems.js.map