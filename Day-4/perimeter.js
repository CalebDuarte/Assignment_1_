// write js to calculate the perimeter of a rectangle
let prompt = require("prompt-sync")();

let legnth = parseInt(prompt(" What is the length of your regtangle? "));
let width = parseInt(prompt(" What is the width of your rectangle? "));
console.log(" The perimeter of your rectangle is " + 2 * (legnth + width));