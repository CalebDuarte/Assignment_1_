//Write a JavaScript program that asks the user for the side length of a square.
let prompt = require("prompt-sync")();
let side = parseInt(prompt(" What is the side length of your square? "));
console.log(" The area of your rectangle is " + side * side);