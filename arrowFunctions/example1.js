// Types of functions in JS

////////////////////////////////////////Anonymous functions////////////////////////////////////////////////

//Expressions one: are often used when you want to assign a function to a variable or pass it as argument to another function
const sayHello = function() {
    return "Hello";
}

//arguments can't be done with arrow functions
const sayHelloNormal = function () {
    console.log(arguments)
}
console.log(sayHelloNormal("Bernardo", "Antonio", "Dávila", "rondon"))

//arrows versions
const sayHello2 = () => {
    return "Hello"
}
console.log(sayHello2())

const sayHello3 = firstName => {
    return `Hello ${firstName}`
}
console.log(sayHello3("Bernardo"))

const sayHello3_2 = firstName => `Hello ${firstName}`
console.log(sayHello3_2("Bernardo"))

const sayHello4 = (firstName, secondName) => {
    return `Hello ${firstName} ${secondName}`
}
console.log(sayHello4("Bernardo", "Dávila"))

//////////////////////////////////////Named Functions////////////////////////////////////////////////////////
//Declarations one: are named and have function names that can be used to call the function
function heyYou() {
    return "casa"
}

//arrow function
//It can't make a named arrow function so it always has to be asign to a variable like an anonimous function
const sayHeyYou = () => {
    console.log("Hey you")
}
sayHeyYou()


//constructor functions
function Person(n) {
    this.name = n
}
//arrow version
//It can´t make a constructor function directly as an arrow function


///////////////////////////////////////////Callback Functions/////////////////////////////////////////////////
setTimeout(function() {
    return "hello"
}, 500)

//arrow version
setTimeout (() => {
    console.log("Hellooo")
},1000)

//////////////////////////////////////////Object Methods/////////////////////////////////////////////////////
//functions inside objects
const me = {
    talk: function () {
        return "Yello"
      },
    walk: "Walk",
    fall: function () {
        return this
    },
}
console.log(me.talk())
console.log(me.fall())

//arrow versions - It is not convenient to use arrow functions inside objects to methods
const you = {
    talk: () => {
        return "Yello Arrow"
    },
    arrowTalk: () => {
        return this
    }
}
console.log(you.talk())
console.log(you.arrowTalk())

//Don't use arrow function for:
    // Object methods
    // Prototypes
    // Constructors
    // Event handlers