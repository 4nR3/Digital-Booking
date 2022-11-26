import React, { Component } from "react";
import { useState } from "react";
import "../../componentsStyle/Administracion/formImagenes.css"

function FormImagenes(){

        const [listaImagenes, setListaImagenes] = useState([{imagen:""}])

        const aumentarImagen = (event) =>{
            event.preventDefault();
            setListaImagenes([...listaImagenes,{imagen:""}])
        }

        const eliminarImagen = (index,e) =>{
            e.preventDefault();
            const lista = [...listaImagenes];
            lista.splice(index,1);
            setListaImagenes(lista);
        }

        const onchange = (index , e) =>{
            const {name,value} = e.target;
            const lista = [...listaImagenes];
            lista[index][name] = value;
            setListaImagenes(lista);
        }
    

        return(
            <div className="imagenes">
                {
                listaImagenes.map((item,index)=>(
                <div className="imagenesPropiedad" key={index}> 
                    <input placeholder="Insertar https://" name="imagen" className="inputLinkImagen" value={item.imagen} onChange={(e)=>onchange(index,e)}></input>
                    {listaImagenes.length-1 > index ?(
                        <button className="agregarImagen" onClick={(e)=> eliminarImagen(index,e)}>x</button>

                    ):
                    (
                        <button className="agregarImagen" onClick={aumentarImagen}>+</button>
                    )

                    }
                </div>  
                ))
                }
                
            
            </div>
        )
    
}


export default FormImagenes;