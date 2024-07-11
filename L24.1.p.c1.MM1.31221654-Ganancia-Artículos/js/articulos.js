const articulos = [
    { codigo: 888, costo: 10, precioVenta: 15 },
    { codigo: 777, costo: 20, precioVenta: 25 },
    { codigo: 999, costo: 15, precioVenta: 25 },
    { codigo: 333, costo: 25, precioVenta: 35 },
    { codigo: 111, costo: 50, precioVenta: 70 },
    { codigo: 333, costo: 40, precioVenta: 50 },
    { codigo: 444, costo: 80, precioVenta: 100 },
    { codigo: 222, costo: 5, precioVenta: 10 }
];

let gananciaTotal = 0;
let codigoMaxPrecioVenta = null;
let maxPrecioVenta = 0;

articulos.forEach(articulo => {
    gananciaTotal += articulo.precioVenta - articulo.costo;
    if (articulo.precioVenta > maxPrecioVenta) {
        maxPrecioVenta = articulo.precioVenta;
        codigoMaxPrecioVenta = articulo.codigo;
    }
});

const salida = document.getElementById("salida");
salida.innerHTML = "Ganancia de los Artículos:";
salida.innerHTML += `<br>Ganancia Total: $${gananciaTotal}`;
salida.innerHTML += `<br>Código del Artículo con Mayor Precio de Venta: ${codigoMaxPrecioVenta}`;