var frutas = ["pera", "manzana", "banana", "lechoza"];

var masFrutas = frutas.push("mandarinas", "coco"); /*agrega elementos al final */

var menosFrutasAlFinal = frutas.pop();   /*elimina el ultimo elemento*/

var masFrutasAlInicio = frutas.unshift("Fresa", "Cerezas"); /*agrega elementos al principio*/

var menosFrutasAlInicio = frutas.shift(); /*elimina el primer elemento*/

var posicionFrutas = frutas.indexOf("manzana"); /*indica el index del elemento del array*/

console.log(frutas);