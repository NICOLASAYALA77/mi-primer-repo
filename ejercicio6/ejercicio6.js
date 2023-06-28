/*6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.*/

let numero1 = prompt("Por favor ingresa el primer número");
let numero2 = prompt("Por favor ingresa el segundo número");
let numero3 = prompt("Por favor ingresa el tercer número");
if (numero1 >= numero2 && numero1 >= numero3) {
    document.write("El número " + numero1 + " es el mayor");
} else if (numero2 >= numero1 && numero2 >= numero3) {
    document.write("El número " + numero2 + " es el mayor");
} else {
    document.write("El número " + numero3 + " es el mayor");
}