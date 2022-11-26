import React, { Component } from "react";
import "../../../componentsStyle/Administracion/formDescripcion.css"

function FormInfoGeneral(info){

        return(
                <div className="descripcionFormProducto"> 
                        <label className="labelTituloFormProducto">Titulo descripcion</label>
                        <input className="inputTituloFormProducto" placeholder="Titulo descripcion" name="tituloDescripcionEditar" defaultValue={info.info.tituloDescripcion}></input>
                        <br></br>
                        <label className="tituloInputFormProducto">Descripcion</label>
                        <textarea type="text" placeholder="Descripcion" name="descripcionEditar" className="inputDescripcionFormProducto" defaultValue={info.info.descripcion}></textarea>
                </div>
        )
}


export default FormInfoGeneral;