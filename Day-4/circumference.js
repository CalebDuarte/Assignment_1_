// write a js program that asks the user for the radius of a circle and prints its circumference
let prompt = require("prompt-sync")();

let pie = 3.14;
let  radius = parseInt(prompt(" What is the radius of your circle? "));
console.log(" The circumference of your circle is " + 2 * pie * radius);