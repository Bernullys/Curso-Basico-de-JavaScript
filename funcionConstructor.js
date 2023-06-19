// funcion constructora:

function Auto(brand, model, year) {
    this.marca = brand;
    this.modelo = model;
    this.año = year;
    this.detail = function(){
        console.log(`Auto ${this.modelo} del ${this.año}.`)
    }
}


var carList = [];
var cantidadRegistrar = prompt("Cantidad de autos a registrar: ");
var cantidadRegistrados = 0;



while (cantidadRegistrados < cantidadRegistrar) {
    var marca = prompt("marca: ");
    var modelo = prompt("modelo: ");
    var año = prompt("año: ");
    carList.push(new Auto(marca, modelo, año));
    cantidadRegistrados++;
}

for (var autos of carList) {
    console.log(autos);
}