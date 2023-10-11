const letters = ["a", "b", "c"]
let element = []
// for (let i = 0; i < letters.length; i++) {
//     element.push(letters[i])
// }
// console.log(element)

letters.forEach(item => element.push(item))
console.log(element)