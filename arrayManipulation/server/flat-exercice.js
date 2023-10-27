const inPut = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]

  const countWords = (array) => {
    return array.map(a => a.split(" ")).flat().length
  } 

  console.log(countWords(inPut))