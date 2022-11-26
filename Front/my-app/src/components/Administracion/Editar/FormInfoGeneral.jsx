import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../../componentsStyle/Administracion/formInfoGeneral.css"
import link from "../../Util"
import RSelect from "react-select"

function FormInfoGeneral(info){

    const [arrayCategoria, setArrayCategoria] = useState([]);
    const [arrayCiudades, setArrayCiudades] = useState([]);
    const [isBusy, setBusy] = useState(true)
    let infoCategoria =[]
    let infoCiudades =[]
    let style = {
        option:(provided, state) => ({
            ...provided,
            'border-bottom': '1px solid #0c0a0a',
             'background-color': state.isSelected ? 'white' : 'white',
             color: state.isSelected ? 'black' : 'black',
             height:38 ,}),

        menu:(provided)=>({
            ...provided,
            width: '100%',
        }),

        control:(provided)=>({
            ...provided,
            width: '100%',
            height: 44,
        })


    }

    

    useEffect(()=>{

        async function cargarCategorias(){

            const urlStart = link+"/categoria";
    
            const configuracion ={
                method: 'GET',
                headers: {
                "content-type": "application/json; charset=UTF-8",
                }
                }
    
         
        await fetch(urlStart, configuracion)
            .then(response => {
                return response.json()})
            .then(data =>{setArrayCategoria(data);
            })
    
        }
    
        async function cargarCiudades(){
    
            const urlStart = link+"/ciudades/listaCiudades";
    
            const configuracion ={
                method: 'GET',
                headers: {
                "content-type": "application/json; charset=UTF-8",
                }
                }
    
            await fetch(urlStart, configuracion)
            .then(response => {setBusy(false);
                return response.json()})
            .then(data =>{setArrayCiudades(data)})
        }

        cargarCategorias();
        cargarCiudades();
    },[])
    
        return( (!isBusy && arrayCategoria && arrayCiudades)? (
            <div className="infoFormProducto">
                <div className="nombrePropiedad"> 
                    <label className="tituloInputFormProducto">Nombre de la propiedad</label>
                    <input type="text" placeholder="Nombre" name="nombreEditar" className="inputFormProducto" defaultValue={info.info.nombre}></input>
                </div>

                <div className="categoriaFormProducto"> 
                    <label className="tituloInputFormProducto">Categoria</label>
                    <RSelect options={infoCategoria} placeholder={"Seleccione una categoria"} styles={style} name="CategoriaEditar" defaultValue={{value: info.info.categoria.idCategoria,label: info.info.categoria.titulo}}>  
                        {arrayCategoria.map(item=>(
                                    infoCategoria.push({value: item.idCategoria, label: item.titulo})
                                ))
                                }
                    </RSelect>

                </div>

                <div className="direccionFormProducto"> 
                    <label className="tituloInputFormProducto">Direccion</label>
                    <input type="text" placeholder="Direccion" name="direccionEditar" className="inputFormProducto" defaultValue={info.info.direccion}></input>
                </div>

                <div className="ciudadFormProducto"> 
                    <label className="tituloInputFormProducto">Ciudad</label>
                    <RSelect options={infoCiudades} placeholder={"Seleccione una ciudad"} styles={style} name="CiudadEditar" defaultValue={{value:info.info.ciudad.idCiudad ,label:info.info.ciudad.nombre}} >   
                        {arrayCiudades.map(item=>(
                                    infoCiudades.push({value: item.idCiudad, label: <span><i class="fas fa-map-marker-alt" id="iconoSelectCiudad" />{item.nombre},{item.provincia},{item.pais}</span>})
                                ))
                                }
                    </RSelect>
                </div>

                
                <div className="latitudFormProducto"> 
                    <label className="tituloInputFormProducto">Latitud</label>
                    <input type="text" placeholder="Latitud" name="latitudEditar" className="inputFormProducto" defaultValue={info.info.latitud}></input>
                </div>

                <div className="longitudFormProducto"> 
                    <label className="tituloInputFormProducto">Longitud</label>
                    <input type="text" placeholder="Longitud" name="longitudEditar" className="inputFormProducto" defaultValue={info.info.longitud}></input>
                </div>

            </div>):(<div></div>)
        )
    
}



export default FormInfoGeneral;


/*

<input type="text" placeholder="Categoria" name="categoria" className="inputFormProducto"></input>
<input type="text" placeholder="Ciudad" name="ciudad" className="inputFormProducto"></input>

*/