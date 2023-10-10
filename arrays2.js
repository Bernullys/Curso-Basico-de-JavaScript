var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

// metodo filter : filtra - genera un nuevo array - el parametro de la function es el articulo que va a filtrar
var articulosFiltrados = articulos.filter(function(articulo){  
    return articulo.costo <= 500
});

// metodo map: mapea ciertos articulos - tambien va a generar un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos- el parametro de la funcion es el o los articulos que se quieren mapea

var costoArticulos = articulos.map(function(articulo){
    return articulo.costo
})

// metodo find: busca el valor que yo este buscando - genera un nuevo array si encuentra el valor

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});


// metodo forEach() - no genera un nuevo array, entonces hay que llamar el objeto

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// metodo some() - regrasa una validacion de verdadero o falso, osea si se cumple o no pero no especifica cuales - genera un nuevo array

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});


