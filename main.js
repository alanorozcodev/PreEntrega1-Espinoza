let costoTotal = 0;
let pagoConTarjeta = 0;
const seriviciosDentales = [
    {nombre: "Limpieza", costo: 150},
    {nombre: "Extraccion", costo: 500},
    {nombre: "Endodoncia", costo: 1500},
    {nombre: "Blanquemiento", costo: 450},
    {nombre: "Carillas", costo: 3000},
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
    let servicioSeleccionado = prompt("Ingresa el servicio que necesitas sin acentos (o escribe 'listo' para finalizar):").toLowerCase();

    if (servicioSeleccionado === "listo") {
        break;
    }
    if (servicioSeleccionado === "limpieza") {
        costoServicio = limpieza;
        costoTotal = costoTotal + costoServicio;
    } else if (servicioSeleccionado === "extraccion") {
        costoServicio = extraccion;
        costoTotal = costoTotal + costoServicio;
    } else if (servicioSeleccionado === "endodoncia") {
        costoServicio = endodoncia;
        costoTotal = costoTotal + costoServicio;
    } else if (servicioSeleccionado === "blanqueamiento") {
        costoServicio = blanqueamiento;
        costoTotal = costoTotal + costoServicio;
    } else {
        alert("Lo siento, el servicio ingresado no está disponible.");
        continue;
    }
    alert(`Servicio agregado: ${servicioSeleccionado} Costo: $${costoServicio}`);
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