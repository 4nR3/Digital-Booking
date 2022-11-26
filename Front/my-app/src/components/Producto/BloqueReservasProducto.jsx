import '../../componentsStyle/producto/bloqueReservasProducto.css';
import React, {useContext, useState } from 'react';
import CalendarioReserva from './CalendarioReserva';
import { Link } from "react-router-dom";
import { userContext } from '../../context/userContext';


export default function BloqueReservasProducto({info}){

    let link;
    const {user, setUser}=useContext(userContext);

    if(user)
        {link = `/Reserva/${info.idProducto}`;}
    else
        {link = `/Login`;}

    return (
        <div className="bloqueReservasProducto">  
            <div className="reservasProducto__titulo__container">
                <h2 className="reservasProducto__titulo">Fechas Disponibles</h2>
            </div>

            <div className="reservasProducto__calendario__card__container">
                <div className="reservasProducto__calendario">
                    <CalendarioReserva/>
                </div>
                <div className="card__reservasProducto">
                    <p className="card__reservasProducto__txt">Agregá tus fechas de viaje para obtener precios exactos</p>
                    <Link to={`Reserva`}>  <button type="submit" className="card__reservasProducto__btn">Iniciar reserva</button></Link>
                </div>
            </div>

        </div>  
    )


}


        