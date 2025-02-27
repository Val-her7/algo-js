let arr = [100, 101, 102];
let sum = arr.reduce(function add(total, currentValue){
    return total + currentValue;
})
console.log(sum);

