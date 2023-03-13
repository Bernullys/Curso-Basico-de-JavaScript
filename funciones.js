// Dos tipos de funciones: Declarativas y Expresión o Anonimas

//Declarativas:

function miFuncion() {
    return 3;
}

miFuncion();

//Expresión:

var miFuncion = function(a,b){
    return a + b;
}

resultado = miFuncion(2,2);
console.log(resultado)