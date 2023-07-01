/*5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.*/

let numero1 = prompt("Por favor ingresa el primer número");
let numero2 = prompt("Por favor ingresa el segundo número");
if (numero1 < numero2) {
document.write("El número " + numero1 + " es menor que el número " + numero2);
} else if (numero2 < numero1) {
    document.write("El número " + numero2 + " es menor que el número " + numero1);
}