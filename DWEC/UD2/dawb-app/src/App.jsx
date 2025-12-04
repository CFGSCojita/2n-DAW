import { useState } from 'react'
import './App.css'
import AsignaturasLista from './components/AsignaturasLista'

// useEffect
// Permite ejecutar un código en momentos específicos SI se cumplen unas condiciones.
// Tiene una función y un array (que se llama dependentes, dentro de este array indicaremos que es lo que hará cada componente).

function App() {

  const {muestraAsignaturas, setMuestraAsignatura} = useState(true);

  return (
    <div>
      <button onClick={() => setMuestraAsignatura(false)}>Esconde Asignaturas</button>
      { muestraAsignaturas && <AsignaturasLista /> }
    </div>
  )
}

export default App
