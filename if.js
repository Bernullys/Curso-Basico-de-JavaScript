var edad = 19;

if (edad === 18) {
    console.log("Ya puedes votar");
} else if (edad > 18) {
    console.log("Puedes votar");
} else {
    console.log("No puedes votar aún")
}

//otra forma de hacer condicional if else//

var respuesta = edad >= 18 ? "Si puedo votar" : "No puedo votar"
console.log(respuesta)