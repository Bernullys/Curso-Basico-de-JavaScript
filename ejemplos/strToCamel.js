let example1 = "the-stealth-warrior";

const toCamelCase = (string) => {
    let base = string.split("-");
    let_uppers = base.map((upper, index) => {
        if (index === 0) {
            return upper
        }
        return (upper[0].toUpperCase() + upper.slice(1));
    })

    return let_uppers.join("")
}

console.log(toCamelCase(example1))