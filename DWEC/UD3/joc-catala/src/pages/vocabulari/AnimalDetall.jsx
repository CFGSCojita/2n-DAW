import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import vocabulariAnimals from "../../data/vocabulariAnimals";
import { guardaProgresAnimal } from "../../firebase/services/progressService";
import { useAuth } from "../../auth/AuthContext";

export default function AnimalDetall() {
    const { id } = useParams();
    const navigate = useNavigate();

    const animal = vocabulariAnimals.find((a) => a.id === Number(id));

    const { usuari } = useAuth();

    useEffect(() => {
        if (usuari && animal) {
            guardaProgresAnimal(usuari.id, animal.id);
        }
    }, [usuari, animal]);

    if (!animal) {
      return <p>Animal no trobat...</p>
    }

    return (
        <div>
            <h3>Fitxa de l'Animal</h3>
            <p>En català: {animal.catala}</p>
            <p>En castellà: {animal.castella}</p>

            <button onClick={() => navigate(-1)}>Tornar a la llista</button>
        </div>
    );
}
