let prompt = require("prompt-sync")();

let bill = parseInt(prompt(" What is the total price of your bill? "));
let tipPrecentage = parseInt(prompt(" How much would you like to tip? "));
console.log(" Your tip amount is " + bill * tipPrecentage / 100 + '$');
console.log(" Your total is " + bill + '$'); 