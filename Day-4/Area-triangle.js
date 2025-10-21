//Write a JavaScript program that asks the user for the base and height of a triangle.
let prompt = require("prompt-sync")();

let base = parseInt(prompt(" What is the size of your triangles base? "));
let height = parseInt(prompt(" What is the height of your triangle? "));
console.log(" The area of your triangle is " + 0.5 * base * height);