import { NavLink, Outlet } from "react-router-dom";
import './Vocabulari.css'

export default function Vocabulari() {
  return (
    <div>
        <h2>Joc del Vocabulari</h2>
        
        <nav className="sub-menu">
          <NavLink to="animals" className="sub-link">Animals</NavLink>
          <NavLink to="menjar" className="sub-link">Menjar</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}
