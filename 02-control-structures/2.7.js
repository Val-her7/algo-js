const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
let i = 1;
let sum = 0;
while (i <= n) {
    let a = Number(prompt("Enter a number: "));
    sum += a;
    i ++;
}
console.log(sum);