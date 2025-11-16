// Symbol = Valores únicos e inmutables -> identificadores en objetos.

// const id = Symbol("id");

// const persona = {
//     nombre: "Stefan",
//     [id]: 1
// };

// console.log(persona[id]);

// Iteradores
// Objetos que implementan un protocolo de iteración en JavaScript.
// const numeros = [1, 2, 3];
// const iterador = numeros[Symbol.iterator]();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// Set - Almacenar valores únicos de cualquier tipo.
// No permite duplicados.

// const set = new Set();

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);

// // set.clear();
// set.delete(3);

// console.log(set);
// console.log(set.size);

// console.log(set.has(4));

// Map
// Almacenar pares clave - valor

const mapa = new Map();

mapa.set("nombre", "Stefan");
mapa.set("edad", 44);

console.log(mapa.get("nombre"));
console.log(mapa.get("edad"));
mapa.delete("edad");
console.log(mapa.has("edad"));
console.log(mapa);