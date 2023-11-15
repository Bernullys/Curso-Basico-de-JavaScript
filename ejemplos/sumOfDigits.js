const number1 = 493193
const number2 = 942


const digitalRoot = (n) => {
    const digiString = n.toString().split("")
    const digiInteger = digiString.map(element => parseInt(element, 10))
    let digiRecursive = digiInteger.reduce((sum, element) => sum +  element, 0)
    if (digiRecursive > 9) {
        return digitalRoot(digiRecursive)
    }
    return digiRecursive
}

console.log(digitalRoot(number1)) 