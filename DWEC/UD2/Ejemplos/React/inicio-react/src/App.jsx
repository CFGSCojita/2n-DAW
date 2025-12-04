// FUNCIONES COMO PROPS

import "./App.css";
import { useState } from "react";
import Titulo from "./components/Titulo";
import Modal from "./components/Modal";
import EventosLista from "./components/EventosLista";
import EventoNuevoForm from "./components/EventoNuevoForm";

const App = () => {
    const [eventos, setEventos] = useState([]);

    const [mostrarEventos, setMostrarEventos] = useState(true);
    const [muestraModal, setMuestraModal] = useState(false);

    const addEvento = (evento) => {
        setEventos((eventosPrevios) => {
            return {...eventosPrevios, evento};
        });

        setMostrarEventos(false);
    }

    const subtitulo = "Todos los eventos para Desarrollo de Aplicaciones Web";

    const handleClick = (id) => {
        setEventos((eventosPrevios) =>
            eventosPrevios.filter((evento) => id !== evento.id)
        );

        console.log(id);
    };

    const handleCerrar = () => {
        setMuestraModal(false);
    };

    return (
        <div className="App">
            <Titulo titulo="Eventos de DAW y Olé" subtitulo={subtitulo} />
            {!mostrarEventos && (
                <div>
                    <button onClick={() => setMostrarEventos(true)}>
                        Mostrar Eventos
                    </button>
                </div>
            )}
            {mostrarEventos && (
                <div>
                    <button onClick={() => setMostrarEventos(false)}>
                        Ocultar Eventos
                    </button>
                </div>
            )}
            {
                mostrarEventos && <EventosLista eventos={eventos} handleClick={handleClick}/>
            }
            {muestraModal && (
                <Modal handleCerrar={handleCerrar}>
                    <EventoNuevoForm addEvento={addEvento} />
                </Modal>
            )}
            <br />
            <div>
                <button onClick={() => setMuestraModal(true)}>Crear Nuevo Evento</button>
            </div>
        </div>
    );
};

export default App;
