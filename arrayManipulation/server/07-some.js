const numbers = [1, 2, 3, 4];

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: false,
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
        delivered: false,
    }
];

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Work date"
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 30),
        title: "Date with myself"
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Dinner"
    }
]


const checkPair = numbers.some(n => n % 2 === 0)
console.log(checkPair)

const rta = orders.some(order => order.delivered)
console.log(rta);

//evaluate if I can reserve a date and don't crash it with an existing date
const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
}

console.log("It crash with other date? A:", isOverlap(newAppointment))