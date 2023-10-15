// map is inmutable, returns another array with the same ammount of elements

const letters = ["a", "b", "c"];

//const newLetters = []
// for (let i = 0; i < letters.length; i++) {
//     const element = letters[i];
//     newLetters.push(element + "++");
// }

const mapLetters = letters.map(letter => letter + "++")

console.log(`Letters: ${letters}`);
console.log(letters)
console.log(`Map letters: ${mapLetters}`);