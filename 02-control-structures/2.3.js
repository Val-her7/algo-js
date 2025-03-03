//first version with while loop that executes 100 times
let i = 1;
while (i <= 100) {
    if ((i % 2) === 0){
        console.log(i);
    }
    i ++;
}

//second version with for loop that executes 50 times
for (let i = 2; i <= 100; i +=2) {
    console.log(i);
}