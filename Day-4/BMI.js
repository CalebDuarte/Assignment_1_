let prompt = require("prompt-sync")();
let lb = parseInt(prompt(" How much do you weigh in lbs? "));
let height = parseInt(prompt(" How tall are you in inches? "));
let bmi = (lb / (height * height)) * 703;


console.log(" You have a BMI of " + bmi.toFixed(2));