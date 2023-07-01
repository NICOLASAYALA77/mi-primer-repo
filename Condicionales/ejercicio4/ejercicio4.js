/*4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/

let numeroCliente = prompt("Por favor ingresa tu número de cliente");
if (numeroCliente === "1000") {
    document.write("Ganaste un premio");
} else {
    document.write("Lo sentimos " + numeroCliente + ", No es un mumero ganador,  sigue participando.");
}