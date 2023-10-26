const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9, [1, 2, 4]],
  ]

const newArray = [];

for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);
    }
}
console.log(newArray);

const rta = matrix.flat(3)
console.log(rta)