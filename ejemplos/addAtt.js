let data = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ]

//   for (d of data) {
//     d["taxes"] = 0.19*d["price"]
//   }
//   console.log(data)

  let data2 = data.map(d => (d.taxes = 0.19 *d.price))

  console.log(data2) 