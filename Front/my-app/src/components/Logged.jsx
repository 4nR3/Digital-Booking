import React from "react";
import { Link } from "react-router-dom";
import "../componentsStyle/HeaderStyle.css";


export default function Logged(){

   const usuario= localStorage.getItem("usuario")
    
   var arrayUsuario = usuario.split(" ")
   
    var iniciales = ""

for (let i = 0; i < 2;  i++){
    iniciales += arrayUsuario[i][0]
}
var inicialesUsuarioMayusc =iniciales.toUpperCase()

const cerrarSesion =() =>{
    localStorage.setItem("logeado",false)
    localStorage.setItem("jwt",null)
}

    return(
    <>
    <div className="header__derechaContainer">
    <div className="usuario_container">
    <div><p className="usuario_circle">{inicialesUsuarioMayusc}</p> </div>
    <div >
    <p className="usuario_p2">Hola,</p> 
    <p className="usuario_p2">{usuario} </p> 
    
    </div>
    <Link to="/"><button onClick={()=>cerrarSesion()} className="boton" >Cerrar Sesión </button></Link>
    </div>
    </div>
        </>
)
}