const items = [1, 3, 2, 3, 3, 10, 15, 20, 25, 25, 12, 30, 5];

const orderItems = items.reduce((obj, i) => {
    if (i < 10) {
        obj["lessThanTen"]++
    } else if (i < 20) {
        obj["betweenTenAndTwenty"]++
    } else {
        obj["moreThanTwenty"]++
    }
    return obj
},{
    "lessThanTen":0,
    "betweenTenAndTwenty":0,
    "moreThanTwenty":0
})

console.log(orderItems)