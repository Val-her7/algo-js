const prompt = require("prompt-sync")();
let favNumber = Number(prompt("What is your favorite number? "));
while (favNumber !== 42) {
    console.log("Are you sure?");
    favNumber = Number(prompt("What is your favorite number? "));
} 
console.log("Yeah, you find the right number!");