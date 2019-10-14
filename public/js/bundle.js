/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/basket.js":
/*!****************************!*\
  !*** ./js/parts/basket.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function basket() {
  var cards = document.querySelectorAll('.product-blocks .card'),
      cartWrapper = document.querySelector('.cart-wrapper'),
      cartEmpty = document.querySelector('.cart-empty'),
      countGoods = document.querySelector('.basket-counter');
  cards.forEach(function (card) {
    var btn = card.querySelector('.product-block__btn');
    btn.addEventListener('click', function () {
      var cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);
      showData();
      var removeBtn = cardClone.querySelector('.product-block__btn');
      removeBtn.textContent = 'Delete';
      removeBtn.addEventListener('click', function () {
        cardClone.remove();
        showData();
      });
    });
  });

  function showData() {
    var cardsCart = cartWrapper.querySelectorAll('.card'),
        cardsPrice = cartWrapper.querySelectorAll('.product-price'),
        cardTotal = document.querySelector('.basket-price');
    var sum = 0;
    countGoods.textContent = cardsCart.length;
    cardsPrice.forEach(function (cardPrice) {
      var price = parseFloat(cardPrice.textContent);
      sum += price;
    });
    cardTotal.textContent = sum;

    if (cardsCart.length !== 0) {
      cartEmpty.remove();
    } else {
      cartWrapper.appendChild(cartEmpty);
    }
  }
}

module.exports = basket;

/***/ }),

/***/ "./js/parts/burger.js":
/*!****************************!*\
  !*** ./js/parts/burger.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function burger() {
  var burgerMenu = document.querySelector('.menu-link'),
      cart = document.querySelector('.burger'),
      closeBtn = document.querySelector('.burger-close');
  burgerMenu.addEventListener('click', function () {
    cart.style.display = 'flex';
    cart.style.opacity = 1;
    cart.style.transition = '2s linear';
    document.body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', function () {
    cart.style.display = 'none';
    cart.style.opacity = 0;
    cart.style.transition = '';
    document.body.style.overflow = '';
  });
}

module.exports = burger;

/***/ }),

/***/ "./js/parts/openModal.js":
/*!*******************************!*\
  !*** ./js/parts/openModal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function openModal() {
  var basketIcon = document.querySelector('.basket-img'),
      cartBody = document.querySelector('.cart'),
      cartClose = document.querySelector('.cart-close');
  basketIcon.addEventListener('click', function () {
    cartBody.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  cartClose.addEventListener('click', function () {
    cartBody.style.display = 'none';
    document.body.style.overflow = '';
  });
}

module.exports = openModal;

/***/ }),

/***/ "./js/parts/sliderClient.js":
/*!**********************************!*\
  !*** ./js/parts/sliderClient.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sliderClient() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.clothes-slide__blocks'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'flex';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
}

module.exports = sliderClient;

/***/ }),

/***/ "./js/parts/sliderHeader.js":
/*!**********************************!*\
  !*** ./js/parts/sliderHeader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sliderHeader() {
  var slideIndex = 4,
      slides = document.querySelectorAll('.presentation-block__slider'),
      dotsWrap = document.querySelector('.presentation-block__dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = sliderHeader;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var burger = __webpack_require__(/*! ./parts/burger.js */ "./js/parts/burger.js"),
      openModal = __webpack_require__(/*! ./parts/openModal.js */ "./js/parts/openModal.js"),
      basket = __webpack_require__(/*! ./parts/basket.js */ "./js/parts/basket.js"),
      sliderHeader = __webpack_require__(/*! ./parts/sliderHeader.js */ "./js/parts/sliderHeader.js"),
      sliderClient = __webpack_require__(/*! ./parts/sliderClient.js */ "./js/parts/sliderClient.js");

  sliderClient();
  sliderHeader();
  basket();
  openModal();
  burger();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map