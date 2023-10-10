data = [
  {
    "name": "Product 1",
    "price": 1000,
    "stock": 10
  },
  {
    "name": "Product 2",
    "price": 2000,
    "stock": 20
  }
]

for d in data:
    d["taxes"] = round(0.19*d["price"])
print(data)
