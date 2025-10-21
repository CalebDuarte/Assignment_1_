// write js to calculate the area of a circle
let prompt = require("prompt-sync")();

let radius = parseInt(prompt("What is the radius of your circle? "));
let pie = 3.14;

console.log (" The area of your circle is " + pie * radius **2);