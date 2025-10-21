// const parrafo = document.querySelector('body > h1');

// console.log(parrafo);

// const elementosError = document.querySelectorAll('p');

// console.log(elementosError);

// console.log(elementosError[1]);

// elementosError.forEach(
//     (elementoError) => {
//         console.log(elementoError);
//     }
// );

// Por su id
// const tituloPagina = document.getElementById('titulo-pagina');
// console.log(tituloPagina);

// Por su clase
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[1]);

// Por su tag
// const parrafos = document.getElementsByTagName('p');
// console.log(parrafos);
// console.log(parrafos[1]);
// for (let i = 0; i < parrafos.length; i++) {
//     console.log(parrafos[i]);
// }

let enlaces = document.getElementByTagName("a");
let enlaceS = enlaces[4];
let miDiv = document.getElementById("miDiv");
let parrafos = document.getElementsByTagName("p");
let divP = document.getElementById("divP")
let creaP = document.getElementById("creaP");

let polar = divP.getElementsByTagName("p")[divP.getElementsByTagName("p").length - 1]
                .getElementsByTagName("img")[0];
let miP = document.getElementById("miP");

divP.insertBefore(parrafos[2], parrafos[1]);

console.log(miP.style.color);

creaP.addEventListener('click', () => {

    miP.style.color = "blueviolet";
    if(polar.alt) {
        let texto = document.createTextNode(polar.alt);
        let elemento = document.createElement("div");
        let miEnlace = document.createElement("a");

        elemento.appendChild(miEnlace);
        polar.parentElement.appendChild(elemento);
        polar.parentElement-replaceChild(texto, polar);
    }
});