import React, {useState} from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './components/Login/Login';
import Registro from './components/Registro';
import Footer from './components/Footer';
import BloqueBuscador from './components/BloqueBuscador';
import BloqueCategoria from './components/BloqueCategoria';
import Home from './components/Home';
import Producto from './components/Producto/Producto';
import NotFound404 from './components/NotFound404';
import Reserva from "./components/Reserva/Reserva";
import Header from "./components/Header/Header"
import Administracion from "./components/Administracion/Administracion"
import ReservasUsuario from "./components/User/ReservasUsuario"
import { StateProvider } from "../src/context/StateContext";
import { userContext } from "./context/userContext"
import { User2Provider } from "./context/user2Context.jsx";
import Editar from "./components/Administracion/Editar/PaginaEditar"
/*import ProjectRoutes from './components/ProjectRoutes'*/;





function App() {

  console.warn = console.error = () => {};

  const [user, setUser] = useState(false);

  return (
    <StateProvider>

    <User2Provider>
    <userContext.Provider value={{user, setUser}}>
    <BrowserRouter>

      <Header/>
     

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Producto/:id" element={<Producto/>} ></Route>
       

        
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />

        <Route path="/Producto/:id/Reserva/" element={<Reserva />} /> 
        <Route path="/Administracion" element={<Administracion />} />
        <Route path="/MisReservas" element={<ReservasUsuario />} />
        <Route path="/Administracion/Editar/:id" element={<Editar/>} />

        <Route path='*' element={<NotFound404/>} />
      </Routes>

      
      <Footer/>
    </BrowserRouter>
   </userContext.Provider>
   </User2Provider>
   </StateProvider>
  );
}

export default App;



//<Route path={`/Producto/${item.id}/${item.title}`} element={<Producto/>} ></Route>


/* function App() {
  return (
    <div className="App">
      <Header />
      <ProjectRoutes/>
      <Footer />
      
    </div>
  );
}

export default App; */
