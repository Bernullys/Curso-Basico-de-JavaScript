let someThing = "house"

//this don't work:
// function manipSome = (argu) => {
//     return argu *2
// }

//this does work:
const manipSome = (argu) => {
    return argu + 2
}
console.log(manipSome(someThing))
