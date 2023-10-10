let array1 = [2, 4, 6, 8]

arrayByTwo=[]
for (i=0; i<array1.length; i++){
    arrayByTwo.push(2*array1[i])
}

let array2 = array1.map((a)=>a*2)

console.log(arrayByTwo)
console.log(array2)