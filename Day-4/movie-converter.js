let prompt = require("prompt-sync")();
let totalMin = parseInt(prompt(" What is the total number of minutes in your movie? "));

let hours = Math.floor(totalMin / 60);
let min = totalMin % 60;

console.log(" Your movie time is " + hours + " hours & " + min + " minutes");