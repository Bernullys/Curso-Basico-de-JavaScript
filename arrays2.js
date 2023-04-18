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

// metodo map: mapea ciertos articulos - tambien va a generar un nuevo array - el parametro de la funcion es el o los articulos que se quieren mapea

var costoArticulos = articulos.map(function(articulo){
    return articulo.costo
})