function calcularPrecioTotal() {
    let cantEnt = document.getElementById("CantidadEntradas").value;
    document.getElementById("titulo").innerHTML =
        "Comprar " + cantEnt + " entradas";
    let porcDesc = document.getElementById("porcDescuento").value;
    let descuento = (cantEnt * 1000 * porcDesc) / 100;
    let precioFin = cantEnt * 1000 - descuento;
    document.getElementById("precioFinal").value = precioFin;
}

