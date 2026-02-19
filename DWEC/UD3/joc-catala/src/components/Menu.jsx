import { NavLink } from "react-router-dom";
import './Menu.css'
import { useAuth } from "../auth/AuthContext";
import Logout from "../pages/vocabulari/Logout";

export default function Menu() {

    const { usuari } = useAuth();

    return (
        <nav className='menu'>
            <ul>
                <li>
                    <NavLink to="/" className="menu-link">Inici</NavLink>
                </li>
                <li>
                    <NavLink to="/vocabulari" className="menu-link">Vocabulari</NavLink>
                </li>
                <li>
                    <NavLink to="/preguntes" className="menu-link">Preguntes</NavLink>
                </li>
                <li>
                    <NavLink to="/progres" className="menu-link">Progrés</NavLink>
                </li>
            </ul>
            { usuari && (
            <Logout />
            )
            }
        </nav>
    );
}
