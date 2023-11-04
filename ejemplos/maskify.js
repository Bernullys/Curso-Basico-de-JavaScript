const creditCardNumber = "616";

// const maskify = (secretPin) => {
//     let masky = ""
//     for(let i=0; i<secretPin.length; i++) {
//         if(i < secretPin.length -4){
//             masky += "#"
//         }
//         else {
//             masky += secretPin[i]
//         }
//     }
//     return masky
// }

// console.log(maskify(creditCardNumber));

const maskify2 = (cc) => {
    if (cc.length > 4) {
        return "#".repeat(cc.length -4) + cc.slice(-4)
    } else {
        return cc
    }
}
console.log(maskify2(creditCardNumber))