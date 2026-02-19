/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import Comida from './components/Comida';

function App() {

  const [comidas, setComidas] = useState([]);
  const [intentos, setIntentos] = useState(0);
  const [eleccionUno, setEleccionUno] = useState(null);
  const [eleccionDos, setEleccionDos] = useState(null);
  const [deshabilitado, setDeshabilitado] = useState(false);

  const imagenesComidas = [
    { src: "/img/Calamares-a-la-romana-crujientes-600x338.jpg", encontrada : false},
    { src: "/img/croquetas_98.webp", encontrada : false },
    { src: "/img/images (1).jpg", encontrada : false },
    { src: "/img/images (2).jpg", encontrada : false },
    { src: "/img/images.jpg", encontrada : false },
    { src: "/img/sopa_de_lentejas_54738_6_600.jpg", encontrada : false }
  ];

  const barajar = () => {
    const comidasBarajadas = [...imagenesComidas, ...imagenesComidas]
      .sort(() => Math.random() -0.5)
      .map((comida) => ({...comida, id:Math.random()}))

    setComidas(comidasBarajadas);
    setIntentos(0);
  }

  const handleEleccion = (comida) => {
    console.log(comida);
    eleccionUno ? setEleccionDos(comida) : setEleccionUno(comida);
  }

  useEffect(() => {
    if (eleccionUno && eleccionDos) {
      setDeshabilitado(true);
      if(eleccionDos.src == eleccionUno.src) {
        setComidas(comidasPrevias => {
          return comidasPrevias.map((comida) => {
            if (comida.src == eleccionUno.src) {
              return {...comida, "encontrada" : true}
            } else {
              return comida;
            }
          }
          );
        });

      } else {
        console.log("No son iguales.")
      }
      setTimeout(() => { // Agregamos llaves para mayor claridad
        resetear();
      }, 1000);
      resetear();
    }
  }, [eleccionUno, eleccionDos]);

  console.log(comidas);

  const resetear = () => {
    setEleccionUno(null);
    setEleccionDos(null);
    setIntentos(intentosPrevios => intentosPrevios + 1);
    setDeshabilitado(false);
  }

  return (
    <div className='App'>
      <h1>Memory App</h1>
      <button onClick={barajar}>Nueva Partida</button>

      <div className="grid-comida">
        {
          comidas.map((comida) => (
            <Comida 
              comida={comida} 
              key={comida.id} 
              handleEleccion={handleEleccion}
              volteada={comida===eleccionUno || comida===eleccionDos || comida.encontrada}
              deshabilitado={deshabilitado}
              />
          ))
        }
      </div>
      <div><p>Intento: {intentos}</p></div>
    </div>
  )
}

export default App
