'use strict'

const addEventOnElements = function(elements, eventType, callback){
     for (const elem of elements) {
          elem.addEventListener(eventType, callback);
     }
}

// Toggle Search 
const searchBoxc