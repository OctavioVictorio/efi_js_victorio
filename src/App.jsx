import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContainer from './components/users/UserContainer';
import { Menubar } from 'primereact/menubar';
import CreateUser from './components/users/CreateUser';
import Home from './components/home';
import LoginUser from './components/users/LoginUser'; 
import EquipoView from './components/equipo/EquipoView';
import CreateEquipo from './components/equipo/CreateEquipo';
import EquipoContainer from './components/equipo/EquipoContainer';

function App() {
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/home' },
    { label: 'Inicio Sesion', icon: 'pi pi-sign-in', url: '/inicio-sesion' },
    { label: 'Nuevo Usuario', icon: 'pi pi-user-plus', url: '/nuevo-usuario' },    
    { label: 'Usuarios', icon: 'pi pi-users', url: '/usuarios' },
    { laber: 'Equipos', icon: 'pi pi-mobile', url: '/equipos' }
  ];

  return (
    <BrowserRouter>
      <Menubar model={items} className="menubar-custom" />
      <div className="content">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio-sesion" element={<LoginUser />} />
            <Route path="/nuevo-usuario" element={<CreateUser />} />
            <Route path="/usuarios" element={<UserContainer />} />
            <Route path="/equipos" element={<EquipoContainer />} />
            <Route path="/crear-equipo" element={<CreateEquipo />} />
          </Routes>
        </div>
        <div className="background-image" />
      </div>
      <p className="read-the-docs">
        <h1>DRUETTZILLA</h1>
      </p>
    </BrowserRouter>
  );
}

export default App;
