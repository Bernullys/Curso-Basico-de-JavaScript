const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: false,
    },
    {
        customerName: "Bernardo",
        total: 1000,
        delivered: true,
    }
];

// console.log("Original:", orders)

// const rta = orders.map(item => item.total)
// console.log("rta:", rta)

// const rta2 = orders.map(item => orders.taxes = item.total*0.19)
// console.log("rta2:", rta2)

////////////////In this case we are changing the memory reference/////////////////////
// const rta3 = orders.map((item) => {
//     item.tax = 0.19
//     return item
// })
// console.log("rta3:", rta3)
///////////////Thats why the Original orders changed to/////////////////////////////
console.log("Original:", orders)

//////////To avoid this we make sure to create a new objet with spread operator/////////
const rta4 = orders.map((item) => {
    return {
        ...item,
        tax: 0.19
    }
})

console.log("rta4:", rta4)
console.log("Original:", orders)