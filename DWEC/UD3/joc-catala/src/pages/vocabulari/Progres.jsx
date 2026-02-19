import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { getProgresAnimal } from "../../firebase/services/progressService";
import vocabulariAnimals from "../../data/vocabulariAnimals";

export default function Progres() {

  const { usuari } = useAuth();
  const [vistos, setVistos] = useState([]);
  
  useEffect(() => {
    async function carregarProgres() {
      if (usuari) {
        const dades = await getProgresAnimal(usuari.uid);
        setVistos(dades);
      }
    }
    carregarProgres();
  }, [usuari]);

  const total = vocabulariAnimals.length;
  const visitats = vistos.length;

  return (
    <div>
        <h2>Progrés</h2>
        <p>Animals vistos: {visitats} / {total}</p>
        <ul>
            {
                vocabulariAnimals.map((a) => {
                    <li key={a.id}>
                        {vistos.includes(a.id) ? 'V' : ''} {a.catala}
                    </li>
                }
                )
            }
        </ul>
    </div>
  )
}
