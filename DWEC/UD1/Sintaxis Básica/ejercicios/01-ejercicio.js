
// Declaración de variables.
const nombres = ["Luke", "Obi-Wan", "Yoda", "Leia"];
const edades = [19, 57, 900, 19];
let sumaTotal = 0;

const guerreros = []; // Declaramos el array combinado.

// Bucle 'for'.
// Iterará sobre cada elemento del array de nombres y usando el método 'push()' agregara los arrays en cada vuelta, combinando el nombre y la edad.
for (let i = 0; i < nombres.length; i++) {
    guerreros.push({
        nombre: nombres[i], // Añadimos cada nombre.
        edad: edades[i] // Añadimos cada edad.
    });
}

console.log(guerreros); // Mostramos el contenido del array combinado por consola.

// Bucle 'for'.
// Iterará sobre cada elemento del array de edades sumará cada edad a la variable 'sumaTotal'.
for (let i = 0; i < edades.length; i++) {
    sumaTotal += edades[i]; // Sumamos cada edad a la variable 'sumaTotal'.
}

console.log("Suma de edades: " + sumaTotal); // Mostramos la suma total de las edades por consola.