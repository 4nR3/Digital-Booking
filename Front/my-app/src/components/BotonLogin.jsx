import React from "react";
import "../componentsStyle/HeaderStyle.css";


function BotonLogin() {

    

//Otra opción es con useState pero si hacen click en otro lado que no está en el header para ir a login no me modificaria los botones
//dejar los classname sacar los id, cambiar nombre a todo

    const handleClick =() =>{
        //const btnAtras = document.getElementById("btnAtras");
        //btnAtras.style.setProperty("display", "inline-flex")
       /* 
        const btnRegister = document.getElementById("btnRegister");
        btnRegister.style.setProperty("display", "inline-flex")
        
        const btnLogin = document.getElementById("btnLogin");
        btnLogin.style.display = 'none'
        
        const buscador = document.getElementById("bloqueBuscador");
        buscador.style.setProperty("display", "none")*/
        
      }


return(
    <>
<button onClick={()=>handleClick()} id="btnLogin" className="boton">Iniciar Sesión</button>
</>
)}

export default BotonLogin;