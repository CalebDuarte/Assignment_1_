let prompt = require("prompt-sync")();
let friends = parseInt(prompt(" How many friends will be attending? "));
let slices = parseInt(prompt(" How many slices will each friend want? "));

console.log(" You will need a total of " + friends * slices + " pizza slices for " + friends + " friends ");