// first version only with push()
let arr = [1, true, 3, "val", 5];
let copie = [];
for (let element of arr) {
    copie.push(element);
}
console.log(copie);


//second version that uses a single method call to perform the copy
let array = [1, false, 3, "chris", 5];
let copy = array.slice();
console.log(copy);