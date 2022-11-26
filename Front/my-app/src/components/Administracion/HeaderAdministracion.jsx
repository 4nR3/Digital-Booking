import React from 'react';
import '../../componentsStyle/Administracion/headerAdministracion.css';
import volver from '../../img/volver.png';
import { Link } from "react-router-dom";


export default function BloqueHeaderAdministracion({nombre,categoria}){


    return (
        <div className="headerAdministracion__container">
            <div className="headerAdministracion__izquierda__container">
                <h3 className="headerAdministracion__txt">Administración de productos </h3>
            </div>
            <div className="headerAdministracion__derecha__container">
                
                <Link to="/"><img className="headerAdministracion__img" src={volver} alt="volver" /> </Link>
            </div>
        </div>
    )


}
