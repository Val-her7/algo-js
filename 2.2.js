const prompt = require("prompt-sync")();
let min = Number(prompt("Enter a minimum number: "));
let max = Number(prompt("Enter a maximum number: "));
if (min > max) {
    console.log(`Sorry but it seems you didn't understood the assignment well.
The minimum number should not be greater than the maximum number...
Exiting the program.`);
    return;
}
let current = Number(prompt("Enter a current number: "));
if (current >= min && current <= max) {
    console.log("Oh great! The current number is between the minimum number and the maximum number!");
} else {
    console.log("Oh nooo... The current number is not between the minimum number and the maximum number...");
}

