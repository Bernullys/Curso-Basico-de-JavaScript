const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("-".repeat(10));

const productIndex = products.find(product => product.id === "🍔");
if (productIndex !== -1) {
    myProducts.push(productIndex);
    products.splice(productIndex, 1)
}
console.log("myProducts", myProducts);
console.log("products after remove", products);






//////////Update///////////

const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: "delicius"
    }
}

const productIndexV2 = products2.findIndex(product => product.id === update.id)
products2[productIndexV2] = {
    ...products2[productIndexV2],
    ...update.changes
}
console.log('updated products', products2);

///////////Delete an element without modifing the original array//////////

const products3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myThirdProduct = products3.filter(product => product.id !== "🥞")
console.log("Original array:", products3)
console.log("Deleting without modifying original:", myThirdProduct)


/////////Make a modification without modifying the original array////////

const products4 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myFourthProduct = [...products4]
const update4 = {
    id: "🍕",
    changes: {
        title: "The grand Pizza",
        price: 250,
        description: "Is  the best pizza ever"
    }
}

const modiFyngIndex = myFourthProduct.findIndex(product => product.id === update4.id)
myFourthProduct[modiFyngIndex] = {
    ...myFourthProduct[modiFyngIndex],
    ...update4.changes
}
console.log("Original array4:", products4)
console.log("Modifyig without modifying original:", myFourthProduct)

  b