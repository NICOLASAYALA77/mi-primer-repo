let array = [10, 40, 30, 20, 15, 5]; // Array original

array.sort(function(a, b) { // Ordena el array de menor a mayor
  return a - b;
});

let menor = array[0]; // Obtiene el número menor (primer elemento del array)
let mayor = array[array.length - 1]; // Obtiene el número mayor (último elemento del array)

console.log("El arreglo ordenado de menor a mayor: " + array);
console.log("Número menor: " + menor);
console.log("Número mayor: " + mayor);