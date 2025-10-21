let prompt = require("prompt-sync")();

let amount = parseInt(prompt(" How much have you saved each mounth? "));
console.log(' Your total savings for the year are ' + amount * 12 + '$');