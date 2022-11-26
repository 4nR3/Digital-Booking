import React from 'react';
import '../../componentsStyle/User/headerMisReservas.css'
import volver from '../../img/volver.png';
import { Link } from "react-router-dom";


export default function BloqueHeaderMisReservas({nombre,categoria}){


    return (
        <div className="headerMisReservas__container">
            <div className="headerMisReservas__izquierda__container">
                <h2 className="headerMisReservas__txt">Mis reservas</h2>
            </div>
            <div className="headerMisReservas__derecha__container">
                
                <Link to="/"><img className="headerMisReservas__img" src={volver} alt="volver" /> </Link>
            </div>
        </div>
    )


}
