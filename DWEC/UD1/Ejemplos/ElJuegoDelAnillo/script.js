const cuentaAtras = document.getElementById("cuentaAtras");
const tiempoTranscurrido = document.getElementById("tiempoTranscurrido");
const inicio = document.getElementById("inicio");
const anillo = document.getElementById("anillo");
const mensaje = document.getElementById("mensaje");
const areajuego = document.getElementById("areajuego");

let cuentaAtrasValor = 10;
let tiempoTranscurridoValor = 0;
let cuentaAtrasIntervalo;
let tiempoTranscurridoIntervalo;

function inicioJuego() {

    if (inicio.disabled) {
        return;
    }

    inicio.disabled = true;
    mensaje.textContent = "";

    cuentaAtrasValor = 10;
    tiempoTranscurridoValor = 0;

    // Mostrar el anillo
    muestraAnillo();

    cuentaAtras.textContent = `Tiempo restante ${cuentaAtrasValor}`;
    cuentaAtrasIntervalo = setInterval(() => {
        cuentaAtrasValor--;
        cuentaAtras.textContent = `Tiempo restante ${cuentaAtrasValor}`;
        if (cuentaAtrasValor <= 0) {
            finalJuego(false);
        }
    }, 1000);

    tiempoTranscurrido.textContent = `Tiempo transcurrido: ${tiempoTranscurridoValor}`;
    tiempoTranscurridoIntervalo = setInterval(() => {
        tiempoTranscurridoValor++;
        tiempoTranscurrido.textContent = `Tiempo transcurrido: ${tiempoTranscurridoValor}`;
    }, 1000);

    anillo.addEventListener('click', rescataAnillo);

    anillo.style.display = "block";
}

function muestraAnillo() {
    // Nota: La línea original 'const maxX = areajuego.clientWidth = anillo.offsetWidth;'
    // contenía un error al intentar asignar y usar valores en la misma expresión.
    // Aunque funciona, se corrige por claridad:
    const maxX = areajuego.clientWidth - anillo.offsetWidth;
    const maxY = areajuego.clientHeight - anillo.offsetHeight;
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));
    anillo.style.left = randomX + "px";
    anillo.style.top = randomY + "px";
}

function finalJuego(esGanador) {
    clearInterval(cuentaAtrasIntervalo);
    clearInterval(tiempoTranscurridoIntervalo);

    anillo.style.display = "none";
    inicio.disabled = false;

    anillo.removeEventListener('click', rescataAnillo);

    if(esGanador) {
        mensaje.textContent = `¡Enhorabuena! Has rescatado el anillo en ${tiempoTranscurridoValor} segundos.`;
    } else {
        mensaje.textContent = "¡Has perdido! El anillo ha caído en las sombras de Mordor";
    }
}

function rescataAnillo() {
    finalJuego(true);
}

inicio.addEventListener('click', inicioJuego);