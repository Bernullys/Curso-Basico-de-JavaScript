// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + " " + lastname;
// const nickname = "juandc";


// function intro (name, lastname, nickname) {
//     var completeName = name + " " + lastname;
//     var nickname = nickname;
//     return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
// };

// intro("Bernardo","Dávila","Naro");


// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//     console.log("El valor de i es: " + i);
// }

// var i = 0;
// while (i < 5) {
//     console.log("El valor de i es: " + i);
//     i++;
// };
// var i = 10;
// while (i >= 2) {
//     console.log("El valor de i es: " + i);
//     i--;
// };


// var answer = prompt("Cuanto es 2 + 2 ? ");
// if (answer == 4) {
//     console.log("feicitaciones");
// } else {
//     while(answer != 4) {
//         answer = prompt("Cuanto es 2 + 2 ? ");
//     };
//     console.log("feicitaciones");
// };


// var nombres = ["Bernardo", "Antonio", "Dávila", "Rondón"];
// function primerNombre(arreglos) {
//     var first = arreglos[0];
//     return first;
// };
// console.log(primerNombre(nombres));


// var nombres = ["Bernardo", "Antonio", "Dávila", "Rondón"];
// function imprimirArreglos(arreglos){
//     for (dato of arreglos) {
//         console.log(dato);
//     };
// };
// imprimirArreglos(nombres);


var tipoDeSuscripcion = {

    Basic: "Solo puedes tomar los cursos gratis",
    Free: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tu y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

// function objts(objetos){
//     for(key in objetos){
//         console.log(objetos[key])
//     }
// };
// objts(tipoDeSuscripcion);


// function imprimirElementoPorElementoDelObjeto(objetos) {
//     const arr = Object.keys(objetos);
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };

// imprimirElementoPorElementoDelObjeto(tipoDeSuscripcion);


function conseguirTipoSuscripcion (suscripcion) {
    if (tipoDeSuscripcion[suscripcion]) {
        console.log(tipoDeSuscripcion[suscripcion]);
        return;
    }
    console.warn("Esa suscripcion no existe")
};

conseguirTipoSuscripcion("Free")