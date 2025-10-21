let prompt = require("prompt-sync")();
let distance = parseInt(prompt(" What is the distance you traveled in miles? "));
let time = parseInt(prompt(" How long did it take in hours? "));

console.log(" The speed you traveled was " + distance / time + " miles per hour ");