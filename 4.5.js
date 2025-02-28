/**
 * Calculates the distance between two points in a 2D space
 * @param {Array} cordA - Coordinates x and y of the point A
 * @param {Array} cordB - Coordinates x and y of the point B
 * @returns {number} - Distance between the two points
 */
function calcDistance(cordA, cordB) {
    return Math.sqrt(Math.pow((cordB[0] - cordA[0]), 2) + Math.pow((cordB[1] - cordA[1]), 2));
}
const prompt = require("prompt-sync")();
let xA = Number(prompt("Enter the coordinate x of the point A: "));
let yA = Number(prompt("Enter the coordinate y of the point A: "));
let xyA = [xA, yA];
let xB = Number(prompt("Enter the coordinate x of the point B: "));
let yB = Number(prompt("Enter the coordinate y of the point B: "));
let xyB = [xB, yB];
let distance = calcDistance(xyA, xyB);
console.log(`Point A = [${xyA}], point B = [${xyB}] => distance = ${distance}`);