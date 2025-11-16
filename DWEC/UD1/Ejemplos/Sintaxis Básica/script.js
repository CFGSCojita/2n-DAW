// Comentario de una línea
/*
    Comentario
    en bloque.
*/

// VARIABLES
// var, const, let
// let nombre = "Stefan";
// let numero = 3;
// const PI = 3.141592;
// let gano = true;

// console.log(typeof(nombre));
// console.log(typeof(numero));
// console.log(PI, typeof(PI));
// console.log(typeof(gano));

// Cadenas
// let new_nombre = "Stefan";
// let apellido = 'Cojita';
// let cuento = "Cuando despertó, el dinosaurio todavía estaba allí.";

// let tabulacion = "Hola\tPepe";
// console.log(tabulacion);
// let salto = "Hola\nPepe";
// console.log(salto);
// let entreComillas = "Hola \'amigo\' Pepe.";
// console.log(entreComillas);

// Números
// let edad = 20;
// let precio = 23.98;
// let ayudasArbitralesAlMadrid = Infinity;
// console.log(ayudasArbitralesAlMadrid);
// console.log(typeof ayudasArbitralesAlMadrid);
// let rojasParaValverde = -Infinity;
// console.log(typeof rojasParaValverde);

// null: algo definido, pero vacío o con valor nulo.
// let valor = null;
// console.log(valor);
// console.log(typeof valor);
// let prova;

// NaN
// let resultado = "hola" / 3;

// Boolean
// let messi = true;
// let penaldo = false;

// Valores falsy
// null, "", undefined, NaN

// Operadores
// Aritméticos -> operaciones matemáticas
// suma: a + b
// resta: a - b
// multiplicación: a * b
// división: a / b
// módulo: a % b
// let a = 10;
// let b = 2;

// Unarios
// incremento = a++, ++a
// decremento = a--, --a

// let a = 20;
// let b = 2;
// console.log(a++);
// console.log(++a);

// Asignación
// suma y asigna: a += b -> a = a + b;
// resta y asigna: a-= b -> a = a - b;
// multiplica y asigna: a*= b -> a = a * b;
// divide y asigna: a/= b -> a = a / b;
// módulo y asigna: a%= b -> a = a % b;

// Cambio de signo
// -: a = -b;

// let a = "5";
// console.log(typeof a);
// a = parseInt(a);
// a = +a;
// console.log(typeof a);

// let b = "4.55";
// b = parseFloat(b);
// b = +b;
// console.log(b);
// console.log(typeof b);

// Comparación
/*
    >, <, >=, <=, ==, !=, === valor y tipo, !==
*/

// Booleanos
// AND &&
// OR ||
// NOT !

// let a = 5;
// let b = 10;

// let esMayor = a > b;
// let esMenor = a < b;

// console.log(esMayor, esMenor);

// Trabajando con cadenas
// let nombre = "Stefan";
// let apellido = "Cojita";

// let nombreCompleto = nombre +  ' ' + apellido;
// console.log(nombreCompleto);
// let inicialNombre = nombre[0];
// console.log(inicialNombre);
// console.log(nombre.length);

// Métodos para trabajar con cadenas
// let nombreMayuscula = nombre.toUpperCase();
// console.log(nombreMayuscula);
// let nombreMinuscula = nombre.toLowerCase();
// console.log(nombreMinuscula);

// indexOf()
// let email = "joan@gmail.com"
// let indiceA = email.indexOf('@');
// console.log(indiceA);

// let ultimA = email.lastIndexOf('a');
// console.log(ultimA);

// slice()
// let resultado = email.slice(1, 3);
// console.log(resultado);

// substring()
// resultado = email.substring(1, 3);
// console.log(resultado2);
// let resultado = email.replace('a', 'X');
// console.log(resultado);

// ARRAYS
// Incialización
// let numeros = [1, 2, 3, 4, 5];
// console.log(numeros[2]);
// let nombres = ["Stefan", "Maria", "Pere"];
// console.log(nombres[0]);

// let numeros = new Array();
// numeros[0]  = 1;
// numeros[1]  = 2;
// numeros[2]  = 3;
// numeros[3]  = 4;
// numeros[4]  = 5;

// console.log(numeros[4]);

// let nombres = new Array("Stefan", "Maria", "Pere");
// console.log(nombres[2]);

// let numeros = new Array(5);
// numeros[0] = 8;
// numeros[4] = 100;
// numeros[10] = 99;

// console.log(numeros[10]);

// console.log(numeros.length);
// numeros = Array(4).fill(0);
// console.log(numeros[4]);

// Métodos para arrays

const frutas = ['manzana', 'plátano', 'naranja', 'uva'];
// push()
// frutas.push(6);
// console.log(frutas);
// console.log(typeof frutas[0]);
// console.log(typeof frutas[3]);
// console.log(typeof frutas);
// pop()
// let ultimoElemento = frutas.pop();
// shift()
// let primerElemento = frutas.shift();
// unshift()
// frutas.unshift('uva', 'pera');
// slice()
// const copia = frutas.slice(1, 3);
// concat
// const frutas2 = ['fresa', 'melocoton'];
// console.log(frutas);
// const frutasCombinadas = frutas.concat(frutas2);
// const frutasCombinadas = [...frutas, ...frutas2];
// console.log(frutasCombinadas);
// splice()
// console.log(frutas);
// const frutas2 = ['pomelo', 'kiwi', 'melón']
// frutas.splice(1, 2, ...frutas2);
// console.log(frutas);
// join()
// console.log(frutas.join());
// sort() - UNICODE
// console.log(frutas);
// console.log(frutas.sort());
// const numeros = [10, 5, 8, 3, 1];
// numeros.sort();
// console.log(numeros);
// const ciudades = ['Zaragoza', 'madrid', 'Barcelona', "Ávila"];
// ciudades.sort()
// console.log(ciudades);
// console.log(numeros.sort(function(a, b) {
//     return a - b;
// }));
// console.log(numeros.sort((a, b) => a - b));

// ciudades.sort((a, b) =>
//     a.toLowerCase() > b.toLowerCase() ? 1 : 
//     a.toLowerCase() < b.toLowerCase() ? -1 : 0
// );
// console.log(ciudades);
// ciudades.sort((a, b) => a.localeCompare(b));
// console.log(ciudades);

// Estructuras de control
// if - else if - else
// let hora = 14;

// if (hora < 12) {
//     console.log("¡Buenos días!");
// } else if (hora < 18) {
//     console.log("¡Buenas tardes!");
// } else {
//     console.log("¡Buenas noches!");
// }

// switch
// let nombre = "aragorn";
// let edad = -1;

// switch(nombre) {
//     case "gandalf":
//         edad = 1230;
//         break;
//     case "aragorn":
//         edad = 532;
//         break;
//     case "frodo":
//         edad = 34;
//         break;
//     case "sam":
//         edad = 36;
//         break;
//     default:
//         break;
// }

// console.log("Edad: " + edad);

// Ternario ? :
// let hora = 15;
// let mensaje = (hora < 12) ? "Buenos días." : (hora < 18) ? "Buenas tardes." : "Buenas noches.";
// console.log(mensaje);

// Iteración
// while
// let contador = 7;

// while(contador < 5) {
//     console.log(contador);
//     contador++;
// }

// do - while
// let contador = 10;

// do {
//     console.log(contador);
//     contador++;
// } while (contador < 5);

// for
// break - continue
// for(let i = 0; i < 5; i++) {
//     if(i == 3) {
//         console.log("Bingo");
//         break;
//     }
//     console.log(i);
// }

// Funciones 
// function saluda() {
//     console.log("¡Hola!");
// }

// function suma(param1, param2) {
//     return param1 + param2;
// }

// function muestraCalculo() {
//     console.log(suma(3, 7));
// }
// muestraCalculo();

// OBJETOS {} clave - valor
// let unCliente = {
//     nombre: "Peter Jackson",
//     "Dirección del cliente": "c/ Desconocida",
//     "-+-+-+-+-+": "boquepasa",
//     pago: {
//         tipo: "Visa",
//         tarjeta: "1234567890",
//         "Fecha de caducidad": "nunca"
//     }
// };
// console.log(unCliente);

// unCliente.nombre = "Stefan";
// unCliente["Dirección del cliente"] = "algo";
// console.log(unCliente["Dirección del cliente"]);
// console.log(unCliente.nombre);
// console.log(unCliente.pago["Fecha de caducidad"]);

// JSON
// number, string, boolean, array, object, function.

// Métodos cómo datos
let estudiante = {
    id: 2,
    nombre: "Peter",
    diHola: function() {
        return "¡Hola!";
    }
};

estudiante.edad = 22;
estudiante.diAdios = function() {
    return "¡Adiós!";
};
// console.log(estudiante);

// this
let factura = {
    descripcion: "factura de prueba",
    precio: 100.0,
    iva: 21.00,
    subTotal: function() {
        return this.precio + (this.precio * this.iva) / 100;
    }
};

// console.log(factura);
// console.log(factura.subTotal());

// CONSTRUCTORES
function Web(url, nombre) {
    this.url = url;
    this.nombre = nombre;
    this.muestraInfo = function() {
        return this.url + ": " + this.nombre;
    }
}

// let unaWeb = new Web();
// console.log(unaWeb);
// console.log(unaWeb.url);
// let otraWeb = new Web();
// otraWeb.url = "http://fcbarcelona.cat";
// otraWeb.nombre = "Més que un club.";
// console.log(otraWeb);
// console.log(otraWeb.muestraInfo);

Web.prototype.visitas = 2;
Web.prototype.saluda = function() {
    return "¡Hola!";
};
let unaWeb = new Web("http://localhost", "localhost");
console.log(unaWeb.saluda());

// prototype
