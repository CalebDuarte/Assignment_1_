let prompt = require("prompt-sync")();

let temp = parseInt(prompt(" What is the temperature in fahrenheit ? "));
console.log(" The temperature in celsius is " + (temp - 32) * 5/9);