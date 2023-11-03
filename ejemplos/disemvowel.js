const string = "What are you, a communist?";

const vowels = ["a", "e", "i", "o", "u"]

function disevowel(str) {
    let noVowels = ""
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            noVowels = noVowels
        } else {
            noVowels += str[i]
        }
    }
    
    return noVowels
    
}

console.log(disevowel(string))


// Best practice from codewards
// const vowels = 'aeiou';

// function disemvowel(str) {
//   return str
//     .split('')
//     .filter(letter => !vowels.includes(letter.toLowerCase()))
//     .join('');
// }