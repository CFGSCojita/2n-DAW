// DESESTRUCTURACIÓN EXTRACCIÓN DE VALORES

// Extraer valores de arrays y de objetos.

// Array
// const numeros = [1, 2, 3];
// const [a, b, c] = numeros;
// // console.log(a, b, c);

// Object
// const persona = {
//     nombre: "Stefan",
//     id: 6
// };

// const {nombre, id} = persona;
// console.log(nombre, id);

// Atajo para la asignación de propiedades de objetos.
// const nombre = "Stefan"
// const id = 6;

// const persona = {
//     nombre,
//     id
// };

// console.log(persona.nombre);
// console.log(persona.id);

// Template Strings (plantillas de cadenas)
// Operador de interpolación ${}
// const nombre = "Bob";
// const edad = 2;

// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// console.log(mensaje);

// Operador Spread
// Operador de propagación
// Expandir un array en múltiples elementos
// const numeros = [1, 2, 3];
// const nuevosNumeros = [4, ...numeros, 5];
// console.log(nuevosNumeros);

// Parámetros por defecto
// function saludar(nombre = "John Doe") {
//     console.log(`Hola ${nombre}`);
// }

// saludar();

// Parámetros rest
// Capturar un número variable de argumentos
// Pasaremos varios parámetros en un solo 
// function sumar(...numeros) {
//     let resultado = 0;
    
//     for(let numero of numeros) {
//         resultado += numero;    
//     }

//     return resultado;
// }

// console.log(sumar(2, 4, 6, 9, 3, 3));

// Arrow functions
// function sumar(a, b) {
//     return a + b;
// }

// const sumar2 = (a, b) => a + b;

// console.log(sumar2(8, 6));


// Métodos de arrays

const numeros = [1, 2, 3, 4, 5, 6];

// forEach()
// numeros.forEach(
//     (numero) => {
//         console.log(numero * 2);
//     }
// );

// map()
// const dobleNumeros = numeros.map(
//     (numero) => {
//         return numero * 2;
//     }
// );

// console.log(dobleNumeros);

// filter()
// const numerosPares = numeros.filter(
//     (numero) => {
//         return numero >= 3 && numero < 7;
//     }
// );

// console.log(numerosPares);

// reduce()
// const suma = numeros.reduce(
//     (acumulador, numero) => {
//         return acumulador * numero;
//     }
// );

// console.log(suma);

// find() -> devuelve un array que cumple con la condición determinada.
// let numeroEncontrado = numeros.find(
//     (numero) => {
//         return numero > 3;
//     }    
// );

// console.log(numeroEncontrado);

// findIndex()
// const indiceEncontrado = numeros.find(
//     (numero) => {
//         return numero > 7;
//     }
// );

// console.log(indiceEncontrado);

// findLastIndex()

// const indiceEncontrado = numeros.findLastIndex(
//     (numero) => {
//         return numero < 3;
//     }
// );

// console.log(indiceEncontrado);

// some()
// const tieneNumeroPar = numeros.some(
//     (numero) => {
//         return numero < 7;
//     }
// )

// console.log(tieneNumeroPar);

// every()
// const todosMenoresQueDiez = numeros.every(
//     (numero) => {
//         return numero < 10;
//     }
// )
// console.log(todosMenoresQueDiez);