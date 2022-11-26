import React, { useState, useEffect } from "react";
import BloqueHeaderProducto from "./BloqueHeaderProducto";
import BloqueUbicacionProducto from "./BloqueUbicacionProducto";
import BloqueDescripcionProducto from "./BloqueDescripcionProducto";
import BloqueCaracteristicasProducto from "./BloqueCaracteristicasProducto";
import BloquePoliticaProducto from "./BloquePoliticaProducto";
import CompartirProducto from "./CompartirProducto";
import BloqueImagenGrid from "./BloqueImagenGrid";

import CarouselImagenesMobile from "./CarouselImagenesMobile";
import BloqueReservasProducto from "./BloqueReservasProducto";
import BloqueMapa from "./BloqueMapa"
import { useParams } from "react-router-dom";
//import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import link from "../Util"

import ErrorPage from '../Error';
import Cargando from '../Cargando';

//Tendria que hacer que si la ruta no existe me tire error o algo así, en teoria no va renderizar nada si no es una ruta exacta, no entiendo como va ser eso

const Producto = () => {

  let urlStart = link;

  const {id}  =useParams()
  const {data, error, loading} = useFetch(urlStart+`/producto/${id}`)
  
  const producto= data

  
  let tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;   

  if (loading) {
    return <Cargando/>
  }

  if (error !== "") {
    return <ErrorPage/>
  }

  if(tamano>=1366)  
    {return (
        <div >
      {producto && <>    
          <BloqueHeaderProducto nombre={producto.nombre} categoria={producto.categoria.titulo}  />
            <BloqueUbicacionProducto ciudad={producto.ciudad}/>
            <CompartirProducto/>
            <BloqueImagenGrid imagen={producto.imagen} />
            <BloqueDescripcionProducto  info={producto} />
            <BloqueCaracteristicasProducto caracteristica={producto.caracteristica} />
            <BloqueReservasProducto info={producto}/>
            <BloqueMapa ubicacion={producto}/>
            <BloquePoliticaProducto normas={producto.normas} seguridad={producto.seguridad} cancelacion={producto.cancelacion}/>
            </>
      }
        </div>
      )}
  else{
    return (
      <div >
    {producto && <>    
        <BloqueHeaderProducto nombre={producto.nombre} categoria={producto.categoria.titulo}  />
          <BloqueUbicacionProducto ciudad={producto.ciudad}/>
          <CompartirProducto/>
          <CarouselImagenesMobile/>
          <BloqueDescripcionProducto  info={producto} />
          <BloqueCaracteristicasProducto caracteristica={producto.caracteristica} />
          <BloqueReservasProducto info={producto}/>
          <BloqueMapa ubicacion={producto}/>
          <BloquePoliticaProducto normas={producto.normas} seguridad={producto.seguridad} cancelacion={producto.cancelacion}/>
          </>
    }
      </div>
    )



  }


  }
  
  export default Producto

  /*<BloqueImagenesProducto imagen={producto.imagen/}> */