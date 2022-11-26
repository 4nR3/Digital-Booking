import "../../componentsStyle/User/CardsReservadas.css"
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import StateContext from "../../context/StateContext";
import link from "../Util"
import ErrorPage from "../Error"
import Cargando from "../Cargando";

export default function BloqueListado(){ 

    
    const navigate= useNavigate()

    const handleClick = () => {
        //   history.push("/");
        navigate('/')
    
    }  



const idUsuario = localStorage.getItem("idUsuario");

const urlStart = link + "/reserva/usuario/"+ idUsuario;

const {data, error, loading} = useFetch(urlStart)
    if(loading){
        return <Cargando/>
    }

    if(error !==""){
        return <ErrorPage/>
    }
    console.log(data);
    

    let google = "https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761";

if(data===undefined)
return(<div>

</div>)

if(!data.length==0)
return (
        <>
        {data && <div className='cardsReservadas'>
        <div className= "contenedorCardsReservedas">
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
                        <p className="card__descripcion" >{item.descripcion} <Link to={`/Producto/${item.idProducto}`}> <span className="card__descripcion__mas"> más...</span> </Link>  </p> 
                        <Link to={`/Producto/${item.idProducto}`} className="aBotonVerMas">  <button type="submit" className="botonVerMas">Ver más</button></Link>           
                    </div>                     
                </div>
                    </div> 
                           
        ) )} </div>
    </div>}
    </>
    )
else
return(
    <div className="noReservas">
        <div className="mensajeNoReservas">
            <i class="fas fa-plane-departure" id="iconoNoReservas"></i>
            <h2>Aún no has efectuado ninguna reserva</h2>
            <button type="button" className="inicioNoRservaBoton" onClick={handleClick}>Inicio</button>

        </div>
    </div>
)

    
}