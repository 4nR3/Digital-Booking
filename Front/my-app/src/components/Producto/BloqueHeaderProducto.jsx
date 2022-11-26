import React from 'react';
import '../../componentsStyle/producto/bloqueHeaderProducto.css';
import volver from '../../img/volver.png';
import { Link } from "react-router-dom";


export default function BloqueHeaderProducto({nombre,categoria}){


    return (
        <div className="headerProducto__container">
            <div className="headerProducto__izquierda__container">
                <p className="headerProducto__txt">{categoria} </p>
                <h3 className="headerProducto__titulo">{nombre}</h3>
            </div>
            <div className="headerProducto__derecha__container">
                
                <Link to="/"><img className="headerProducto__img" src={volver} alt="volver" /> </Link>
            </div>
        </div>
    )


}




    
    


    
