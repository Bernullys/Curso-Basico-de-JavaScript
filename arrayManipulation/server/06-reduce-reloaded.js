const items = [1, 3, 2, 3, 3, 10];

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

const rta = items.reduce((obj, item)=> {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item]++;
    }
    return obj;
}, {})
console.log(rta)


const rta1 = orders.map(o => o.delivered).reduce((obj, o)=> {
    if(!obj[o]) {
        obj[o] = 1;
    } else {
        obj[o]++;
    }
    return obj;
}, {})
console.log(rta1)