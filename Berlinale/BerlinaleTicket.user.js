// ==UserScript==
// @name         Berlinale ticket
// @author       mitzaM
// @description  try to take over the world!
// @version      0.1
// @namespace    https://mitzaman.ro/
// @downloadURL	 https://github.com/mitzaM/user-scripts/raw/main/berlinale/BerlinaleTicket.user.js
// @updateURL    https://github.com/mitzaM/user-scripts/raw/main/berlinale/BerlinaleTicket.meta.js
// @match        https://www.eventim.de/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

const NR_OF_TICKETS = 1;

(function() {
    'use strict';

    window.addEventListener('load', function() {
        var inputs = document.querySelectorAll('input[type=hidden].js-cc-amount-selection');
        inputs.forEach(function(input) {
            input.value = NR_OF_TICKETS;
        });
        var add_cart = document.querySelectorAll('button[data-qa=TimeslotAddToShoppingCart1],button[data-qa=SeatAddToShoppingCart1],button[data-qa=AddToShoppingCart]')[0];
        if(add_cart) {
            add_cart.disabled = false;
            add_cart.classList.remove('disabled');
            add_cart.click();
        }
    }, false);
})();

