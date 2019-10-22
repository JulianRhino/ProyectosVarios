'use strict';
console.log("'Este\' es un mensaje oculto.");

let fecha = new Date();
let formato = fecha.toDateString();
let selectItem = document.getElementById("date");
selectItem.innerHTML = formato;
