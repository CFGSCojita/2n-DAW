/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import Comida from './components/Comida';

function App() {

  const [comidas, setComidas] = useState([]);
  const [intentos, setIntentos] = useState(0);
  const [eleccionUno, setEleccionUno] = useState(null);
  const [eleccionDos, setEleccionDos] = useState(null);

  const imagenesComidas = [
    { src: "/img/Calamares-a-la-romana-crujientes-600x338.jpg" },
    { src: "/img/croquetas_98.webp" },
    { src: "/img/images (1).jpg" },
    { src: "/img/images (2).jpg" },
    { src: "/img/images.jpg" },
    { src: "/img/sopa_de_lentejas_54738_6_600.jpg" }
  ];

  const barajar = () => {
    const comidasBarajadas = [...imagenesComidas, ...imagenesComidas]
      .sort(() => Math.random() -0.5)
      .map((comida) => ({...comida, id:Math.random()}))

    setComidas(comidasBarajadas);
  }

  const handleEleccion = (comida) => {
    console.log(comida);
    eleccionUno ? setEleccionDos(comida) : setEleccionUno(comida);
  }

  useEffect(() => {

  }, []);

  return (
    <div className='App'>
      <h1>Memory App</h1>
      <button onClick={barajar}>Nueva Partida</button>

      <div className="grid-comida">
        {
          comidas.map((comida) => (
            <Comida comida={comida} key={comida.id} handleEleccion={handleEleccion}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
