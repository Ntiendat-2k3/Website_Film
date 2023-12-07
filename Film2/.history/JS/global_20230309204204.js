'use strict'

// Add event on multi
const addEventOnElements = function(elements, eventType, callback){
     for (const elem of elements) {
          elem.addEventListener(eventType, callback);
     }
}

// Toggle Search 
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
     searchBox.classList.toggle("active");
})