let prompt = require("prompt-sync")();

let temp = parseInt(prompt(" What is the temperature in celsius? "));
console.log(" The temperature in fahrenheit is " + (temp * 9/5 + 32));