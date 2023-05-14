let costoTotal = 0;
let pagoConTarjeta = 0;
const serviciosDentales = [
    { nombre: "Limpieza", costo: 150 },
    { nombre: "Extraccion", costo: 500 },
    { nombre: "Endodoncia", costo: 1500 },
    { nombre: "Blanqueamiento", costo: 450 },
    { nombre: "Carillas", costo: 3000 },
];
const sumaConTarjeta = (a, b) => a + b;
const comision = x => x * .04;
let costoServicio = 0;

alert(`Que tal bienvenido a tu clínica dental , a continuación mostramos los servicios dentales que tenemos a tu disposición.

Los servicios disponibles son:
- Limpieza
- Extracción
- Endodoncia
- Blanqueamiento
- Carillas`);

while (true) {
    let servicioSeleccionado = prompt(`Ingresa el servicio que se requiere sin acentos o escribe 'listo' para finalizar.

Los servicios disponibles son:
- Limpieza
- Extracción
- Endodoncia
- Blanqueamiento
- Carillas`).toLowerCase();

    if (servicioSeleccionado === "listo") {
        break;
    }
    //Buscador del servicio seleccionado en el array de servicios dentales
    const servicioEncontrado = serviciosDentales.find((servicio) => servicio.nombre.toLowerCase() === servicioSeleccionado);

    if (servicioEncontrado) {
        costoServicio = servicioEncontrado.costo;
        costoTotal += costoServicio;
        alert(`Servicio Agregado: ${servicioSeleccionado} - Costo: $${costoServicio}`);
    }
    else {
        alert("Lo siento mucho, el servicio encontrado no esta disponible");
        continue;
    }
}

alert(`El costo total de los servicios seleccionados es: $${costoTotal}`);



while (true) {
    pagoConTarjeta = prompt("¿Piensa pagar con efectivo o tarjeta? (El uso de tarjeta tiene una comisión del 4%)").toLowerCase();
    if (pagoConTarjeta === "efectivo" || pagoConTarjeta === "tarjeta") {
        break;
    } else {
        alert("Favor de ingresar si se pagará con efectivo o tarjeta.");
    }
}
switch (pagoConTarjeta) {
    case "tarjeta":
        let costoTotalConTarjeta = sumaConTarjeta(costoTotal, comision(costoTotal));
        alert(`El costo total de los servicios seleccionados más la comisión de pago con tarjeta es: $${costoTotalConTarjeta}`);
        break;
    case "efectivo":
        alert(`El costo total de los servicios seleccionados es: $${costoTotal}`);
        break;
}
alert("Que tengas un excelente día, esperamos tu visita.");