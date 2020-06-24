// Accept hot module reloading
if (module.hot) {
    module.hot.accept() ;
}

require('./styles.css') ; // The page is now styled
const greeting = require("./greeting") ;        // is    import greeting from "./greeting";   in ES6
var Please = require('pleasejs') ;
var div = document.getElementById('color') ;
var button = document.getElementById('button') ;

function changeColor() {
  div.style.backgroundColor = Please.make_color() ;
  console.log('HMR works no') ;
}

greeting() ;
button.addEventListener('click', changeColor) ;