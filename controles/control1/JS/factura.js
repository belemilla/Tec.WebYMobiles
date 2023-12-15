//calcular total factura tras aplicar el iva
//recibir cantidad sin iva y porcentaje de iva
//devolver total de la factura
//la cantidad y el porcentaje debe ser ingresado por el usuario
//si se invoca la funcion sin pasarle el porcentaje de iva debera aplicar un 19% por defecto


function TotalFactura(cantidadSinIVA, porcentajeIVA = 19){
    if (isNaN(porcentajeIVA) || porcentajeIVA <= 0) {
        return "Porcentaje de IVA inválido";
    }
    var total = cantidadSinIVA + (cantidadSinIVA * (porcentajeIVA / 100));

    return total;
}
var cantidadSinIVA = parseFloat(prompt("Ingrese la cantidad sin IVA:"));

var porcentajeIVA = parseFloat(prompt("Ingrese el porcentaje de IVA (opcional):"));


if (isNaN(porcentajeIVA)) {
    var totalFactura = calcularTotalFactura(cantidadSinIVA); 
} else {
    var totalFactura = calcularTotalFactura(cantidadSinIVA, porcentajeIVA);
}

if (typeof totalFactura === "number") {
    alert("El monto total de la factura es: " + totalFactura.toFixed(2));
} else {
    alert(totalFactura);
}

