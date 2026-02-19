import { useEffect, useState } from "react"
import { fetchVocabulariMenjars } from "../../data/fetchVocabulariAnimals";

export default function Menjars() {

  const [paraules, setParaules] = useState([]);
  const [carregant, setCarregant] = useState(true);

  useEffect(() => {
    fetchVocabulariMenjars().then((dades) => {
      setParaules(dades)
      setCarregant(false)
    })
  }, [])

  if (carregant) {
    return<p>Carregant vocabulari...</p>
  }

  return (
    <div>
        <h3>Vocabulari de Menjars</h3>
        
        <ul>
          { paraules.map((paraula) => (
            <li key={paraula.id}>
              <strong>{paraula.catala}</strong> - {paraula.castella}
            </li>
          )
          ) }
        </ul>
    </div>
  )
}