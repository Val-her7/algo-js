/**
 * Returns the factorial of a number
 * @param {number} a - Input number
 * @returns {number} - Factorial of the input number
 */
function factorial(a) {
    if (a === 1) {
        return a;
    } else {
        return a * factorial(a - 1);
    }
}

console.log(factorial(4));