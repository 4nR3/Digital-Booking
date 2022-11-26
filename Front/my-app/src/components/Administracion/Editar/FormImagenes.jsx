import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../../componentsStyle/Administracion/formImagenes.css"

function FormImagenes(info){

    
    const [listaImagenesEditar, setlistaImagenesEditar] = useState([{imagenEditar:""}])

    const agregarImagen = (event) =>{
        event.preventDefault();
        setlistaImagenesEditar([...listaImagenesEditar,{imagenEditar:""}])
    }

    const eliminarImagen = (index,e) =>{
        e.preventDefault();
        const lista = [...listaImagenesEditar];
        lista.splice(index,1);
        setlistaImagenesEditar(lista);
    }

    const onchange = (index , e) =>{
        const {name,value} = e.target;
        const lista = [...listaImagenesEditar];
        lista[index][name] = value;
        setlistaImagenesEditar(lista);
    }


    return(
        <div className="imagenes" id="divImagenesEditarId">
            {
            listaImagenesEditar.map((item,index)=>(
            <div className="imagenesPropiedad" key={index}> 
                <input placeholder="Insertar https://" name="imagenEditar" className="inputLinkImagen" value={item.imagenEditar} onChange={(e)=>onchange(index,e)}></input>
                {listaImagenesEditar.length-1 > index ?(
                    <button className="agregarImagen" onClick={(e)=> eliminarImagen(index,e)}>x</button>

                ):
                (
                    <button className="agregarImagen" onClick={agregarImagen}>+</button>
                )

                }
            </div>  
            ))
            }
            
        
        </div>
    )

    
}


export default FormImagenes;