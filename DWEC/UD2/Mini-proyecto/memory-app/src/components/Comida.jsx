import "./Comida.css";

export default function Comida({ comida, handleEleccion }) {

    const handleClick = () => {
        handleEleccion(comida);
    }

    return (
        <div className="comida">
            <div>
                <img className="delante" src={comida.src} />
                <img className="detras" src="/img/cubierta.jpg" 
                onClick={handleClick} />
            </div>
        </div>
    );
}