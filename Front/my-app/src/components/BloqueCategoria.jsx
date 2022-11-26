import "../componentsStyle/bloqueCategoria.css";
import StateContext from "../context/StateContext";
import { useEffect, useState, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import link from "../components/Util"

// https://www.youtube.com/watch?v=Qtq8wlNQOFo

    export default function BloqueCategoria() { //es el nombre de mu componente

        let urlStart = link;

        const { data, error, loading } = useFetch(urlStart+`/categoria`)
        const { dataContext, setDataContext, setIdCategoriaContext, idCiudadContext, idFechaContext, setCategoriaContext, fechaContext } = useContext(StateContext)

        let seleccionado=false;

        const nuevoendpoint = (item,titulo) => {
              
            if(idFechaContext!=="" && idCiudadContext!==""){
                setDataContext(urlStart+"/producto/categoriaYCiudadYFecha/"+item+" "+idCiudadContext+" "+idFechaContext);  
                setIdCategoriaContext(item)
                setCategoriaContext(titulo)    
                console.log("Los 3 filtros");
            }
            if(idFechaContext!=="" && idCiudadContext==""){
                setDataContext(urlStart+"/producto/categoriaYFecha/"+item+" "+idFechaContext);  
                setIdCategoriaContext(item)
                setCategoriaContext(titulo)        
                console.log("fecha y categoriat");
            }if(idFechaContext=="" && idCiudadContext!==""){
                setDataContext(urlStart+"/producto/ciudadYCategoria/"+idCiudadContext+" "+item);  
                setIdCategoriaContext(item)
                setCategoriaContext(titulo)       
                console.log("ciudad y categoria");
            }
            if(idFechaContext=="" && idCiudadContext==""){
                setDataContext(urlStart+`/producto/categoria/`+item)
            setIdCategoriaContext(item) 
            setCategoriaContext(titulo)    
 
            }    
        }

        const volver = ()=>{
            setDataContext(urlStart+"/producto/");
        }

        const eleccion=(id,titulo)=>{
            if(!seleccionado)
                {nuevoendpoint(id,titulo);
                seleccionado=true;
            }
            else
                {volver();
                seleccionado=false}
        }

        /* const categorias = ListarCategorias()*/ //declaro la constante postres y le paso la funcion que cree de listar categorias

       
        return (
            <div className='bloqueCategoria'>
                <div className="contenedorTituloAndCards">
                    <h2 className='tituloCategoria'>Buscar por tipo de alojamiento</h2>
                </div>


                    {data && <div className='contenedorCategoria'>
                        {data.map(item => (

                            <div onClick={() => eleccion(item.idCategoria,item.titulo)} className="cardCategoria" key={item.idCategoria}>
                                <img className="imagenCategoria" src={item.urlImagen} alt="" />
                                <div className="textoCategorias">
                                    <h3 className="titleCategoria">{item.titulo}</h3>
                                    <p className="descripcionCategoria">{item.descripcion}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                    }

                </div>
        )

    }