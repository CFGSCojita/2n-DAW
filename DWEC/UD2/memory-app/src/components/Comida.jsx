import "./Comida.css";

export default function Comida({ comida, handleEleccion, volteada, deshabilitado}) {

    const handleClick = () => {
        if (!deshabilitado) {
            handleEleccion(comida);
        }
    }

    return (
        <div className="comida">
            <div className={volteada ? "volteada" : ""}>
                <img className="delante" src={comida.src} />
                <img className="detras" src="/img/cubierta.jpg" 
                onClick={handleClick} />
            </div>
        </div>
    );
}