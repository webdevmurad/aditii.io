window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let burger = require('./parts/burger.js'),
        openModal = require('./parts/openModal.js'),
        basket = require('./parts/basket.js'),
        sliderHeader = require('./parts/sliderHeader.js'),
        sliderClient = require('./parts/sliderClient.js');

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