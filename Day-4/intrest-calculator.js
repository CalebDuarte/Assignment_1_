// program a simple intrest calculator
let prompt = require("prompt-sync")();

let P = parseInt(prompt(" What is your principle amount? "));
let R = parseInt(prompt(" What is the rate of intrest? "));
let T = parseInt(prompt(" What is amount of time in days or years? "));

console.log(" Simple intrest is " + (P * R * T) / 100);