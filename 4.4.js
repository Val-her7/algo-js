let learners = ["Antoine", "Arsenia", "Manu", "Jordan", "Hugo", "Valentin", "Stephan", "Liana", "Kamal", "Martin", "Inna"];
let numb = Math.ceil(Math.random()*(learners.length-1));
console.log(`The number n randomly generated is: ${numb}`);
/**
 * Generates an array of randomly selected learners
 * @param {Array} inputAr - Initial array of learners
 * @param {number} n - Length of the new array 
 * @returns {Array} - New array of randomly selected learners from initial array
 */
function pickLearner(inputAr, n) {
    let randomLearners = [];
    for (let i = 1; i <= n; i ++) {
        let index = Math.floor(Math.random()*(inputAr.length));
        randomLearners.push(inputAr[index]);
        inputAr.splice(index,1);
    }
    return randomLearners;
}
console.log(pickLearner(learners, numb));