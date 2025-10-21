let prompt = require("prompt-sync")();
let price = parseInt(prompt(" Enter your price to see what the discounted price will be "));
let discount = parseInt(prompt(" Enter the discount percentage "));
console.log(" Your final price is now " + (price - (price * discount / 100)));
