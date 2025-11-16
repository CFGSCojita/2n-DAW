const urlPalabrasEndPoint = "http://localhost:3000/palabras";
const listadoPalabras = document.getElementById("listado-palabras");

const url = window.location.pathname;

if(url.includes("palabras-list.html")){
    cargarPalabras();
}else if(url.includes("palabras-edit.html")){
    const parametros = new URLSearchParams(window.location.search);
    const parametroId = parametros.get("id");
    if(parametroId){
        cargarPalabra();
    }
}

async function cargarPalabras(){
    try {
        const response = await fetch(urlPalabrasEndPoint);
        const palabras = await response.json();
        console.log(response);
        console.log(palabras);

        if (listadoPalabras != null && listadoPalabras.length != 0) {
            listadoPalabras.innerHTML = palabras.map(
                (palabra)=>
                    `<div>
                        <p>id: ${palabra.id} Palabra:${palabra.palabra} -Dificultad: ${palabra.dificultad}</p>
                        <button class="editar" onClick="editarPalabra(${palabra.id})">Editar</button>
                        <button class="eliminar" onClick="eliminarPalabra(${palabra.id})">Eliminar</button>
                    </div>`
            ).join("");
        } else {
            listadoPalabras.innerHTML = "<p>No hay palabras registradas</p>"
        }
    } catch (error) {
        console.log("Error al cargar las palabras");
        console.log(error);
    }
}

document.getElementById("palabra-form")
.addEventListener("submit", guardarPalabra());

async function guardarPalabra(e) {
    e.preventDefault();

    const id = new URLSearchParams(window.location.search).get(id);

    const method = id ? "PUT" : "POST";
    const url = id ? `${urlPalabrasEndPoint}/${id}` : urlPalabrasEndPoint;

    const palabra = {
        id: 0, // Codigo para generar un id
        palabra: document.getElementById("palabra").value,
        dificultad: document.getElementById("dificultad").value
    };

    fetch(urlPalabrasEndPoint).then((response)=>response.json()).then((datos)=> {
        if (method == "POST"){
            palabra.id = datos(datos.length -1).id + 1;
            palabra.id = ""; // palabra.id = palabra.id + "";
            console.log("AÑADIENDO: ", palabra.id);
        } else {
            // palabra.id = palabra.id;
            palabra.id = "";
            console.log("EDITANDO: ", palabra.id);
        }
        return fetch(`${url}`),{
            method: method,
            body: JSON.stringify(palabra),
            headers: {
                "Content-Type": "application/json"
            },
        };
    })
    .then(()=> (window.location.href = "palabras-list.html"))
    .catch((error)=> console.log("Error al guardar",error))
}


function cargarPalabra(id){
    fetch(urlPalabrasEndPoint).then((response)=>response.json()).then((datos)=>{
        const palabra = datos.find((palabraP)=>palabraP.id == id);
        document.getElementById("dificultad").value = palabra.dificultad;
    }).catch((error)=> console.log("Error al cargar la palabra", error));
}

function editarPalabra(id){
    window.location.href = `palabras-edit.html?id=${id}`
}

async function eliminarPalabra2(id) {
    try {
        console.log("Eliminando");
        await fetch(`${urlPalabrasEndPoint}/ ${id}`, {method: "DELETE"});
        
        cargarPalabras();
    } catch (error) {
        console.log("ERROR al eliminar la palabra", error);
    }
}

async function eliminarPalabra(id) {

    const urlDelete = `${urlPalabrasEndPoint}/ ${id}`;
    console.log("Eliminar: ", urlDelete);

    fetch(`${urlDelete}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then(() => cargarPalabras())
    .catch((error) => console.error("Error al eliminar la palabra"), error);
}