'use strict'

const addEventOnElements = function(elements, eventType, callback){
     for (const elem of elements) {
          elem.addEventListener('event', listener, options)
     }
}