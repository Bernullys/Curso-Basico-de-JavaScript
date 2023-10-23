const numbers = [1, 30, 9, 29, 10, 13];

const team = [
    {
        name: "Nico",
        age: 12,
    },
    {
        name: "Andrea",
        age: 11,
    },
    {
        name: "Zule",
        age: 2,
    },
    {
        name: "Santi",
        age: 18,
    },
]


console.log(numbers.every(e => e < 40))

const checkIfLessThanFifteen = team.reduce(t => t.age < 15)
console.log(checkIfLessThanFifteen)


// export function checkArray(numbers) {
//     return array.length == 0? false :
//     array.every(a => a % 2 === 0)
//   }