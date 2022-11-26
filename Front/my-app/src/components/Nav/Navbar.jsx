import React, { useState, useEffect,useContext } from  "react";
//import "./navbar.css"
import { Link } from "react-router-dom";
import "./NavBar.css"

import { NavbarWrapper } from "./NavbarStyles";
import Redes from "./Redes";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open} className="navBar">
    <div className="menu_Nav"><h3>MENÚ</h3></div>

      <Link to="/Registro"> Crear cuenta</Link>
      <hr/>
      <Link to="/Login">Iniciar sesión</Link>
      <div className="abajo"/>
      <Redes/>
    </NavbarWrapper>
    

  );
}

export default Navbar;


/*  */