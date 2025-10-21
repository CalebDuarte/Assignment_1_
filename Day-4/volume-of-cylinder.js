// write a js program to calculate the volume of a cylinder
let prompt = require("prompt-sync")();
let radius = parseInt(prompt(" What is the radius of your cylinder? "));
let height = parseInt(prompt(" What is the height of your cylinder? "));
let pie = 3.14;
console.log(" The volume of your cylinder is " + pie * radius ** 2 * height);