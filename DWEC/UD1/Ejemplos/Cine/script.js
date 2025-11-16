// Seleccionar los elementos de DOM
const contenedor = document.querySelector(".contenedor");
const asientos = document.querySelectorAll(".fila .asiento:not(.ocupado)");
const contador = document.getElementById("contador");
const total = document.getElementById("total");
const peliculaSelect = document.getElementById("pelicula");
let precioDelTicket = +peliculaSelect.value;

llenaUI();

// FUNCIONES
function actualizaSeleccionAsientos() {
    
    const asientosSeleccionados = document.querySelectorAll(".fila .asiento.seleccionado");
    console.log(asientosSeleccionados);

    // Hacemos 3 cosas
    // - Copiar los asientos seleccionados en un array.
    // - Mapear los datos a lo largo del array.
    // - Devolver unos nuevos índices del array.

    // const asientosIndex = (...asientosSeleccionados);
    // console.log(asientosIndex);

    // const arr = [1, 2, 3];
    // const arr2 = arr.map((item) => {
    //     return item * 2
    // })
    // console.log(arr2);

    const asientosIndex = [...asientosSeleccionados].map((asiento) => {
        return [...asientos].indexOf(asiento);
    });

    // console.log(asientosIndex);

    localStorage.setItem('asientosSeleccionados', JSON.stringify(asientosIndex));

    const contadorAsientosSeleccionados = asientosSeleccionados.length;

    contador.innerText = contadorAsientosSeleccionados;

    total.innerText = contadorAsientosSeleccionados * precioDelTicket;
}

function guardaInfoPelicula(indicePelicula, precioPelicula) {
    localStorage.setItem('indicePeliculaSeleccionada',  indicePelicula);
    localStorage.setItem('precioPeliculaSeleccionada',  precioPelicula);
}

function llenaUI() {
    const asientosSeleccionados = JSON.parse(localStorage.getItem('asientosSeleccionados'));
    
    if (asientosSeleccionados !== null && asientosSeleccionados.length > 0) {
        asientos.forEach((asiento, indice) => {
            if (asientosSeleccionados.indexOf(indice) > -1) {
                asiento.classList.add('seleccionado');
            }
        });
    }

    const indicePeliculaSeleccionada = localStorage.getItem('indicePeliculaSeleccionada');

    if (indicePeliculaSeleccionada !== null) {
        peliculaSelect.selectedIndex = indicePeliculaSeleccionada;
    }

    const precioPeliculaSeleccionada = localStorage.getItem('precioPeliculaSeleccionada');

    if (precioPeliculaSeleccionada !== null) {
        precioDelTicket = +precioPeliculaSeleccionada;
    }
        
}


// EVENTOS
// Evento para la selección de asientos.
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')) {
        e.target.classList.toggle('seleccionado');
        actualizaSeleccionAsientos();

    }
})

// Evento para la selección de películas.
peliculaSelect.addEventListener('change', (e) => {
    precioDelTicket = +e.target.value;

    // console.log(e.target.selectedIndex, e.target.value);
    guardaInfoPelicula(e.target.selectedIndex, e.target.value);
    
    actualizaSeleccionAsientos();
});