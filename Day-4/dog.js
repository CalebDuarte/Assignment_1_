let prompt = require("prompt-sync")();

let dogAge = parseInt(prompt(" How old is your dog? "));

console.log(" Your dog is " + dogAge * 7 + " in human years ");