const totals = [1, 2, 3, 4];

// let sum = 0
// for (let index = 0; index < totals.length; index++) {
//     sum += totals[index];
// }
// console.log(sum);

const total = totals.reduce((sum, element) => sum + element, 0) //sum is the accumulator and 0 is the initial state
console.log(total)