import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Inici from './pages/Inici'
import Vocabulari from './pages/vocabulari/Vocabulari'
import Preguntes from './pages/preguntes/Preguntes'
import Menu from './components/Menu'
import Animals from './pages/vocabulari/Animals'
import AnimalDetall from './pages/vocabulari/AnimalDetall'
import Menjar from './pages/vocabulari/Menjar'
import Videojoc from './pages/preguntes/Videojoc'
import Cinefil from './pages/preguntes/Cinefil'
import RutaProtegida from './auth/RutaProtegida'
import Login from './pages/Login'
import PanellAdministracio from './pages/PanellAdministracio'
import Progres from './pages/vocabulari/Progres'

function App() {

  return (
    <div>
      <h1>Aprén català jugant</h1>

      <Menu />
      
      <Routes>
        <Route path="/admin" element={
          <RutaProtegida role="admin">
             <PanellAdministracio />
          </RutaProtegida>
         } />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Inici />} />
        <Route path="/vocabulari" element={
          <RutaProtegida>
            <Vocabulari />
          </RutaProtegida>
          } >
          {/* <Route index element={<Navigate to="animals" replace />} /> */}
          <Route path="animals" element={<Animals />}/>
          <Route path="animals/:id" element={<AnimalDetall />}/>
          <Route path="menjar" element={<Menjar />}/>
        </Route>
        <Route path="/preguntes" element={<Preguntes />}>
          <Route path="videojoc" element={<Videojoc />}/>
          <Route path="cinefil" element={<Cinefil />}/>
        </Route>
        <Route path='progres' element={
            <RutaProtegida>
              <Progres />
            </RutaProtegida>
        } />
      </Routes>
    </div>
  )
}

export default App
