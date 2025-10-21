// Write a js program that asks the user fro the side length of a cube to calculate its volume
let prompt = require("prompt-sync")();
let side = parseInt(prompt(" What is the side length of your cube? "));
console.log(" The volume of your cube is " + side **3 );