import React, { Component } from "react";
import Header from "./HeaderAdministracion"
import "../../componentsStyle/Administracion/formProductos.css"
import "../../componentsStyle/Administracion/editarProducto.css"

import link from "../Util"
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ErrorPage from "../Error"
import Cargando from "../Cargando";
import Editar from "./Editar/PaginaEditar"
import Collapsible from "react-collapsible"

function FormProductos(){

    const idUsuario = localStorage.getItem("idUsuario");

    const urlStart = link + "/producto";
    
    const {data, error, loading} = useFetch(urlStart)
        if(loading){
            return <Cargando/>
        }
    
        if(error !==""){
            return <ErrorPage/>
        }

    let style ={

    }
        
    
        let google = "https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761";
        
    return (
            <>
            {data && <div className='cardsProductosEditar'>
            <div className= "contenedorCardsEditar">
            {data.map(item =>(
                
                <div className="card__hospedaje" key={item.idProducto}>
                    <div className="card__izquierda__container">
                        <img className="card__imagen" src={item.imagen[0].url} alt="" />
                    </div>
                    <div className="card__derecha__container">
                        <div className="card__derecha__container__titulos__puntuacion">
                            <div className="card__categoriaYTitulo">
                                <p className="card__categoriaHospedaje">{item.categoria.titulo}                
                                    <span className="puntuacion">
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i>
                                    </span>                
                                </p> 
                                <h3 className="card__titulo">{item.nombre} </h3>
                            </div>
                            <div className="card__derecha__detalles">
                                <div className="ubicacion">
                                    <p className="card__lugar">
                                        <i class="fas fa-map-marker-alt"></i> {item.ciudad.nombre} <span className="carddescripcion_mas" > <a href={google} target="_blank"> MOSTRAR EN EL MAPA </a> </span>
                                    </p>
                                </div>
                            <div className="divCaracteristicas">
                                {
                                    item.caracteristica.map(carac=>(
                                        <span className="caracterisitcasCard"><i class={carac.clase}></i></span>
                                    ))
                                }
                            </div>           
                            </div>
                            <p className="card__descripcion" >{item.descripcion}</p> 
                            <Collapsible trigger="EDITAR" triggerStyle={style} overflowWhenOpen='hidden' className="">
                                <Editar infoProducto={item}/>
                            </Collapsible>      
                        </div>                     
                    </div>
                        </div> 
                               
            ) )} </div>
        </div>}
        </>
        )
}

export default FormProductos;