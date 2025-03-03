//first version with spread operator
let arr = [10, 20, 5, 75, 40, 43, 2, 110, 29];
let minimum = Math.min(...arr);
let maximum = Math.max(...arr);
console.log(minimum);
console.log(maximum);


//second version
 arr.sort(function(a, b){return a-b});
 console.log(arr[0]);
 console.log(arr[arr.length-1]);


