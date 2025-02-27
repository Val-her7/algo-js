const prompt = require("prompt-sync")();
let age = prompt("Enter your age: ");
console.log(age);
if (isNaN(Number(age))){
    console.log("This is not a number...");
} else if (age === null){
    console.log("You did not enter anything...");
} else {
    if (Number(age) >= 18){
        console.log("You are an adult!");
    } else {
        console.log("You are not yet an adult!");
    }
}