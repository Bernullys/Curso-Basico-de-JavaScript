const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray1 = elements // this way will keep the same memory reference
const newArray2 = [...elements] //this way will create a new memory reference


for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray2.push(element)
}
console.log(newArray2)

newArrayConcat = elements.concat(othersElements)
console.log(newArrayConcat)

otherWayConcat = [...elements, ...othersElements]
console.log(otherWayConcat)

otherUse = [...elements, "Bernardo"]
console.log(otherUse)

anotherCase = [...elements, ..."Bernardo"]
console.log(anotherCase)

//If we want to modify the same memory reference:
elements.push(...othersElements)
console.log(elements)

//Here I don't know what is doing:
sameMemoryReference = elements.push(...othersElements)
console.log(sameMemoryReference)