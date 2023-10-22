const words = ["spray", "limit", "elite", "exuberant"];

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

const rta = words.filter(w => w.length >= 6)
console.log("rta:", rta)
console.log("Original:", words)


const rta2 = orders.filter(o => o.delivered && o.total >= 100)
console.log(rta2)


const search = (query) => {
    return orders.filter(o => {
        return o.customerName.includes(query)
    })
}
console.log(search("Santi"))