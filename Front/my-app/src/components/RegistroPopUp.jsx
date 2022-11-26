import React from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import '../componentsStyle/reserva/reservaFallida.css'
import "../componentsStyle/RegistroPopUp.css"

const RegistroExitoso = ({isOpenPopUP, close}) => {

    const navigate= useNavigate()

   // const history = useHistory();

    const handleClick = () => {
        isOpenPopUP=false;
        navigate('/');
    }

    if(!isOpenPopUP) {return null};

    const modalStyles={
        position: "absolute",
        top: '50%',
        left: '50%',
        width: "100vw",
    height: "100vh",
position: "fixed",
top: 0,
left: 0,
background: "rgba(0, 0, 0, 0.8)",
zIndex: "500",
display: "flex",
alignItems: "center",
justifyContent: "center",
}
    return (
        <div style={modalStyles} className="contenedor-mensajes-exitoso">
            <i class="fas fa-check-circle" id='iRegistroExistoso'></i>
            <p className="texto-resaltado">Registro exitoso</p>
            <p className="normal-texto">Por favor inicie sesion.</p>
            <button type="button" className="ok-boton" onClick={handleClick}>Volver al inicio</button>
        </div>
    )
}

export default RegistroExitoso;