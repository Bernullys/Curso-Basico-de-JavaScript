const example1 = "din"
const example2 = "recede"
const example3 = "Success"

duplicateEncode = (word) => {
    let newWord = word.toLowerCase().split("")
    let ocurrence = {}
    let encodeWord = ""
    newWord.map(item => {
        if (ocurrence[item]) {
            ocurrence[item] += 1
        } else {
            ocurrence[item] = 1
        }
    })
    newWord.forEach(item => {
        if (ocurrence[item] > 1) {
            encodeWord += ")"
        } else {
            encodeWord += "("
        }
    })
    return encodeWord
}
console.log(duplicateEncode(example3))

// a codeward solution
// function duplicateEncode(word){
   
//     var unique='';
//     word = word.toLowerCase();
//     for(var i=0; i<word.length; i++){
//         if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//             unique += '(';
//         }
//         else{
//             unique += ')';
//         }
//     }
//     return unique;

// }