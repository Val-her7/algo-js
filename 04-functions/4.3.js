/**
 * Returns a random integer between 1 and 10
 * @returns {number} - The random integer between 1 and 10
 */
function rand10(){
    return Math.ceil(Math.random()*10);
}
/**
 * Generates an array of n numbers between 1 and 10
 * @param {number} n - The number of random numbers to generate
 * @returns {Array} - The array generated with n numbers
 */
function multiRand(n){
    let arr = [];
    for (let i = 1; i <=n ; i++) {
        arr.push(rand10());
    }
    return arr;
}
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number of random numbers to generate: "));
let displayNumbers = multiRand(n);
for (number of displayNumbers) {
    console.log(number);
}