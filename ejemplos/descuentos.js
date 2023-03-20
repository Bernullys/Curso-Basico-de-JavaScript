var articulos = 11;
descuentoTotal = descuentos(articulos)*articulos

function descuentos(articulos){
    if (articulos <= 5) {
        var descuento = 0.9;
    } else if (5 < articulos && articulos <= 10) {
        var descuento = 0.85;
    }else if (articulos > 10) {
        var descuento = 0.8;
    }
    return descuento;
}

console.log(descuentoTotal);