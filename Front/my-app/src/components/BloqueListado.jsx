import "../componentsStyle/bloqueListado.css";
import posicion from '../img/posicion.png';
// https://www.youtube.com/watch?v=Qtq8wlNQOFo
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import StateContext from "../context/StateContext";
import link from "../components/Util"
import { userContext } from '../context/userContext'
import Cargando from './Cargando';
import swal from "sweetalert";


import ErrorPage from "./Error"

export default function BloqueListado(){ 

    const { dataContext, setDataContext, ciudadContext, setCiudadContext, idFechaContext, setIdFechaContext,
         idCiudadContext, setFechaCalendarContext,
         setIdCiudadContext, idCategoriaContext, setIdCategoriaContext, fechaContext, categoriaContext } =useContext(StateContext)

         const {user}=useContext(userContext)
         useEffect(() => {

            return () => {


               /* var els=document.getElementsByClassName("rmdp-input")[0];
                 els.value = ""
                els.setAttribute("value", "")*/
               // document.getElementsByClassName("rmdp-input")[0].value = "";



            };
          }, [idFechaContext]);

const {data, error, loading} = useFetch(dataContext)
    if(loading){
        return <Cargando/>
    }




    
    let urlStart = link;

    const quitarCategoria =() =>{
        if(idFechaContext!=="" && idCiudadContext==""){
        setDataContext(urlStart+"/producto/fecha/"+idFechaContext);
        setIdCategoriaContext("")
        
    }
    if(idFechaContext!=="" && idCiudadContext!==""){
        
        setDataContext(urlStart+"/producto/ciudadYFecha/"+idCiudadContext+" "+idFechaContext);
        setIdCategoriaContext("")
    }
    if(idFechaContext=="" && idCiudadContext!==""){
        setDataContext(urlStart+`/producto/ciudad/`+idCiudadContext);
        setIdCategoriaContext("")
        
    }
    if(idFechaContext=="" && idCiudadContext==""){
        setIdCategoriaContext("")
        
        var els=document.getElementsByClassName("rmdp-input")[0];
        
//esto de abajo podria ser una funcion
  let urlStart = link;

  if(user)
  {
  setDataContext(urlStart+"/producto/")
} else{
    setDataContext(urlStart+"/producto/aleatorios")
  }
}
    }


    const quitarCiudad =() =>{
        if(idFechaContext!=="" && idCategoriaContext==""){
        setDataContext(urlStart+"/producto/fecha/"+idFechaContext);
        setIdCiudadContext("")
    }
    if(idFechaContext!=="" && idCategoriaContext!==""){
        
        setDataContext(urlStart+"/producto/categoriaYFecha/"+idCategoriaContext+" "+idFechaContext);
        setIdCiudadContext("")
    }
    if(idFechaContext=="" && idCategoriaContext!==""){
        setDataContext(urlStart+`/producto/categoria/`+idCategoriaContext);
        setIdCiudadContext("")
        
    }
    if(idFechaContext=="" && idCategoriaContext==""){
        setIdCiudadContext("")

//esto de abajo podria ser una funcion
  let urlStart = link;

  if(user)
  {
  setDataContext(urlStart+"/producto/")
} else{
    setDataContext(urlStart+"/producto/aleatorios")
  }
}
    }



    //       var els=document.getElementsByClassName("rmdp-input")[0];
    const quitarFecha =() =>{
       // document.getElementsByClassName("rmdp-input")[0].value = "";
       // els.value = ""
       setFechaCalendarContext("")

    if(idCiudadContext!="" && idCategoriaContext==""){
        setDataContext(urlStart+`/producto/ciudad/`+idCiudadContext);
       setIdFechaContext("")
       setFechaCalendarContext("")

//       var els=document.getElementsByClassName("rmdp-input")[0];
       // var els=document.getElementsByClassName("rmdp-input")[0];
       // console.log(els);
     //let fechas = els[0].value;
     // els.value = ""
        //els.setAttribute("value", "")
     //   document.getElementsByClassName("rmdp-input")[0].value = "";
    }
    if(idCiudadContext!=="" && idCategoriaContext!==""){
        setDataContext(urlStart+"/producto/ciudadYCategoria/"+idCiudadContext+" "+idCategoriaContext);
        
        setIdFechaContext("")
        setFechaCalendarContext("")

        //setDataContext(urlStart+`/producto/ciudad/`+idCiudadContext);
    }
    if(idCiudadContext=="" && idCategoriaContext!==""){
        setDataContext(urlStart+`/producto/categoria/`+idCategoriaContext);
        
        setIdFechaContext("")
        setFechaCalendarContext("")


    }
    if(idCiudadContext=="" && idCategoriaContext==""){
        setIdFechaContext("")
        setFechaCalendarContext("")


  let urlStart = link;

  if(user)
  {
  setDataContext(urlStart+"/producto/")
} else{
    setDataContext(urlStart+"/producto/aleatorios")
  }
}
}

return (
        <>
        {data && <div className='bloqueListado'>
        <div className= "listado_contenedor_titulo">
                <h2 className='tituloListado'>Recomendaciones</h2>  
        </div>
        {idCiudadContext!="" ?<button className="BotonFiltroOn" id="BotonFiltroCiudadOn" onClick={()=>quitarCiudad()} > <i class="fas fa-backspace" ></i>  {ciudadContext } </button> : <></>}
        {idFechaContext!="" ?<button className="BotonFiltroOnFecha" id="BotonFiltroFechaOn" onClick={()=>quitarFecha()} > <i class="fas fa-backspace" ></i>  {fechaContext.replace("~", "-")}</button>:<></>}
        {idCategoriaContext!="" ?<button className="BotonFiltroOnCategoria" id="BotonFiltroFechaOn" onClick={()=>quitarCategoria()}> <i class="fas fa-backspace" ></i>  {categoriaContext}</button>:<></>}
        {data.length ==0 ?<><h1 className="no_disponibilidad">No Hay disponibilidad con estos filtros, pruebe cambiar de fecha, tipo de alojamiento o ciudad. ¡Muchas Gracias! </h1></>:<></>}
        <div className= "cards__contenedor">
        {data.map(item =>(
            
            <div className="card__hospedaje" key={item.idProducto}>
                <div className="card__izquierda__container">
                    <img className="card__imagen" src={item.imagen[0].url} alt="" />
                </div>
                <div className="card__derecha__container" id="cardDerechaContainerListadoHome">
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
                                    <i class="fas fa-map-marker-alt"></i> {item.ciudad.nombre} <span className="carddescripcion_mas" > <a href={ "https://maps.google.com/?q="+item.latitud+","+item.longitud} target="_blank"> MOSTRAR EN EL MAPA </a> </span>
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
                        <p className="card__descripcion" >{item.descripcion} <Link to={`/Producto/${item.idProducto}`}> <span className="card__descripcion__mas"> más...</span> </Link> </p>

                    </div>

                    <Link to={`/Producto/${item.idProducto}`} className="aBotonVerMas">  <button type="submit" className="botonVerMas">Ver más</button></Link>
                </div>

            </div>
                           
        ) )} </div>
    </div>}
    </>
    )

    
}