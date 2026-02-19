import { NavLink, Outlet } from "react-router-dom";
import './Preguntes.css'

export default function Preguntes() {
  return (
    <div>
        <h2>Joc de Preguntes</h2>

        <nav className="sub-menu">
          <NavLink to="videojoc" className="sub-link">Videojoc</NavLink>
          <NavLink to="cinefil" className="sub-link">Cinefil</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}
