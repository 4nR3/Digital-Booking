import React, {Component} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./CardsReservadas"
import Header from "./HeaderMisReservas"

function ReservasUsuario(){

    const navigate = useNavigate()

        useEffect(() => {
            if (localStorage.getItem("jwt")==null) {
              navigate('/Login')
            }
            
          })

        return(
            <div className="paginaReservasUsuario">
              <Header />
              <Cards />
            </div>
        )

}

export default ReservasUsuario;