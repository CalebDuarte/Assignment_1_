// find the average of three numbers using a js program
let prompt = require("prompt-sync")();

let a = parseInt(prompt(" Pick any number "));
let b = parseInt(prompt(" Pick any number "));
let c = parseInt(prompt(" Pick any number "));

console.log(" The average of your three numbers is " + (a + b + c) / 3);