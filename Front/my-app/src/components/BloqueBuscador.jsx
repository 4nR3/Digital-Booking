import React from 'react'
import "../componentsStyle/bloqueBuscador.css"
import Ciudades from "./Ciudades";
//import BusquedaCalendario from "./BusquedaCalendario";
import "../componentsStyle/buscar.css"
import { useFetch } from '../hooks/useFetch';
import link from "./Util"
import ErrorPage from './Error';
import Cargando from './Cargando';


const BloqueBuscador = () => {

  let urlStart = link;

  const urlCiudades = ``
  const { data, error, loading } = useFetch(urlStart+`/ciudades/listaCiudades`)
  if (loading) {
    return <Cargando/>
  }

  if (error !== "") {
    return <ErrorPage/>
  }


  return (
    <div className='bloqueBuscador'>
      <div className="contenedor">
        <h1 className='texto'>Busca ofertas en hoteles, casas y mucho más</h1>
      </div>

      {data && <Ciudades ciudades={data} />}


    </div>
  )
}

export default BloqueBuscador

