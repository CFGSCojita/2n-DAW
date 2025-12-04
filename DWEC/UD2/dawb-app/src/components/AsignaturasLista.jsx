// rfc intro

// API fetch (nativo de JavaScript)
// fetch()
// http://localhost:3000/asignaturas

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import './AsignaturasLista.css';

export default function AsignaturasLista() {

    const [url, setUrl] = useState('http://localhost:3000/asignaturas')
    const { datos : asignaturas , cargando, error } = useFetch(url);

    return (
        <div className="asignatura-lista">
            <h2>Listado de Asignaturas</h2>
            { cargando && <div>Cargando asignaturas...</div> }
            { error && <div><p></p></div> }
            <ul>
                { asignaturas && asignaturas.map(asignatura => (
                    <li key={asignatura.id}>
                        <h3>{asignatura.nombre}</h3>
                        <p>Horas Totales: {asignatura["horas totales"]}</p>
                    </li>
                ))
                }
            </ul>
            <div className="filtros">
                <button onClick={() => setUrl('http://localhost:3000/asignaturas?idioma=Inglés')}>Inglés</button>
                <button onClick={() => setUrl('http://localhost:3000/asignaturas?idioma=Catalán')}>Todos</button>
            </div>
        </div>
    );
}