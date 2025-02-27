let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce(function add(total, currentValue) {
    return total + currentValue;
})
let avg = sum / (arr.length);
console.log(avg);