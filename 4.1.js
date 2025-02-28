/**
 * Calculate the surface of a rectangle.
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} - The calcultated surface
 */
function calcSurface(length, width) {
    return length * width;
}
const prompt = require("prompt-sync")();
let length = Number(prompt("What is the length of the rectangle? "));
let width = Number(prompt("What is the width of the rectangle? "));
console.log(`The surface of that rectangle is ${calcSurface(length, width)}.`);
