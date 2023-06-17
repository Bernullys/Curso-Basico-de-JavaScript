var frutas = ["pera", "manzana", "banana", "lechoza"];

var masFrutas = frutas.push("mandarinas", "coco"); /*agrega elementos al final */

var menosFrutasAlFinal = frutas.pop();   /*elimina el ultimo elemento*/

var masFrutasAlInicio = frutas.unshift("Fresa", "Cerezas"); /*agrega elementos al principio*/

var menosFrutasAlInicio = frutas.shift(); /*elimina el primer elemento*/

var posicionFrutas = frutas.indexOf("manzana"); /*indica el index del elemento del array*/

console.log(frutas);

["a", "b", "c"].concat("d") // ["a", "b", "c", "d"]

["a", "b", "c"].join("-") // [a-b-c]

["a", "b", "c"].slice(1) // ["a", "b"]

["a", "b", "c"].includes("c") // true

[3, 5, 6, 8].find((n) => n % 2 !==0) // 6

[2, 4, 3, 5].findIndex((n) => n % 2 !==0) // 2

[3, 4, 8, 6].map((n) => n * 2 !==0) // [6, 8, 16, 12]

[1, 4, 7, 8].filter((n) => n % 2 === 0) // [4, 8]

[2, 4, 3, 7].reduce((cc, cur) => acc + cur) // 16

[2, 3, 4, 5].every((x) => x < 6) // true

[3, 5, 6, 8].some((n) => n > 6) // true

[1, 2, 3, 4].reverse() // [4,3,2,1]

[3, 5, 7, 8].at(-2) // 7

