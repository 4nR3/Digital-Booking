import React from "react";
import "../componentsStyle/HeaderStyle.css";


function BotonRegister() {


    const register =() =>{
        const btnAtras = document.getElementById("btnAtras");
        btnAtras.style.display = 'inline-flex'
       /* const btnlogin = document.getElementById("btnLogin");
        btnlogin.style.display = 'inline-flex'
        
        const btnRegister = document.getElementById("btnRegister");
        btnRegister.style.display = 'none'
//        btnAtras.style.display = 'inline-flex'

const buscador = document.getElementById("bloqueBuscador");
buscador.style.setProperty("display", "none")*/

      }


return(
    <>
<button onClick={()=>register()} id="btnRegister" className="boton" >Crear Cuenta </button>
    </>

)

}


export default BotonRegister;