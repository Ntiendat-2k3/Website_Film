'use strict'

const addEventOnElements = function(elements, eventType, callback){
     for (const elem of elements) {
          elem.addEventListener(eventType, callback);
     }
}

// Toggle Search 
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search]");