import React, { Component, useState } from "react";
import Header from "./HeaderAdministracion"
import "../../componentsStyle/Administracion/formProductos.css"

import InfoGeneral from "./FormInfoGeneral"
import Atributos from "./FormAtributos"
import Politicas from "./FormPoliticas"
import Imagenes from "./FormImagenes"
import Descripcion from "./FormDescripcion"
import link from "../Util"
import CreacionExistosa from "./CreacionExistosa"
import swal from "sweetalert";


function FormProductos(){


        const[isOpenCE, setOpenCE] = useState(false);

        return(
            <div className="crearProductos">
                <CreacionExistosa isOpenCE={isOpenCE} close={() => setOpenCE(false)} />
                <h2>Crear producto</h2>
                <div className="formProductos">
                    <form className="formContainer" onSubmit={enviarProductoNuevo}>
                        <InfoGeneral />
                        <Descripcion />
                        <h3>Agregar atributos</h3>
                        <Atributos />
                        <h3>Políticas del producto</h3>
                        <Politicas />
                        <h3>Cargar imágenes</h3>
                        <Imagenes />
                        <button className="enviarProductoNuevo" type="submit">Crear</button>
                    </form>
                </div>
            </div>
        )

function comprobar(palabra){

    if(palabra==="" || palabra===null || palabra===undefined || palabra===" ")
        return false;

    return true;
}

        
async function enviarProductoNuevo(event){
    event.preventDefault();
    const urlStart = link;

    let formNombre = event.target.nombre.value;
    let formCategoria =event.target.Categoria.value;
    let formDireccion =event.target.direccion.value;
    let formCiudad =event.target.Ciudad.value;
    let formLatitud = event.target.latitud.value;
    let formLongitud = event.target.longitud.value;
    let formDescripcionTitulo = event.target.tituloDescripcion.value;
    let formDescripcion =event.target.descripcion.value;
    let formAtributoNombre =event.target.atributoNombre;
    let formAtributoIcono =event.target.atributoIcono;
    let formPoliticaCancelacion =event.target.politicaCancelacion.value;
    let formPoliticaSaludYSeguridad =event.target.politicaSaludYSeguridad.value;
    let formPoliticaDescripcion =event.target.politicaDescripcion.value;
    let formImagen =event.target.imagen;

    if(!(comprobar(formNombre) && comprobar(formCategoria) && comprobar(formDireccion) && comprobar(formCiudad) && comprobar(formDescripcion) && comprobar(formAtributoNombre) && comprobar(formAtributoIcono) && comprobar(formPoliticaCancelacion) && comprobar(formPoliticaSaludYSeguridad) && comprobar(formImagen) && comprobar(formLatitud) && comprobar(formLongitud) && comprobar(formDescripcionTitulo)))
        {
            swal("CAMPOS INCOMPLETOS");
            throw console.error("CAMPOS INCOMPLETOS");
        }

    let arrayImagenes =[];


    for(let f=0; f<formImagen.length;f++)
        {
            const datosImagenes = {
                titulo: "hotel",
                url : formImagen[f].value
            }

        
            await fetch(urlStart+"/imagenes", {
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosImagenes)}
                )
                .then(res =>{return res.json()})
                .then((response) =>{
                arrayImagenes.push({idImagen: response.idImagen});})
                .catch(error => console.error('Error:', error));
        }


    let caracteristicas = [];

    for(let f=0;f<formAtributoIcono.length;f++){
            caracteristicas.push( {idCaracteristica: formAtributoIcono[f].value})
    }

    const datosProducto ={
        nombre : formNombre,
        tituloDescripcion: formDescripcionTitulo,
        descripcion : formDescripcion,
        direccion: formDireccion,
        categoria : {
                idCategoria: formCategoria
        },
        ciudad : {
            idCiudad : formCiudad
        },
        imagen: arrayImagenes,
        caracteristica: caracteristicas,
        normas: formPoliticaDescripcion,
        seguridad: formPoliticaSaludYSeguridad,
        cancelacion: formPoliticaCancelacion,
        latitud: formLatitud,
        longitud: formLongitud,
    }

    
    fetch(urlStart+"/producto", {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosProducto)}
        )
        .then(res => res.json())
        .catch(error => {console.error('Error:', error)})
        .then((response) =>{ 
           setOpenCE(true);});      
}
    
}

export default FormProductos;