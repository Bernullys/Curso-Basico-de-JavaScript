const numbers = [1, 30, 49, 29, 10, 13];

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

console.log(numbers.find(num => num === 30))

const special = orders.findIndex(order => order.total === 180)
console.log(special)