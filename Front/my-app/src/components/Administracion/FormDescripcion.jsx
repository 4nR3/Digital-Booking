import React, { Component } from "react";
import "../../componentsStyle/Administracion/formDescripcion.css"

class FormInfoGeneral extends Component{

    render(){
        return(
                <div className="descripcionFormProducto"> 
                    <label className="labelTituloFormProducto">Titulo descripcion</label>
                    <input className="inputTituloFormProducto" placeholder="Titulo descripcion" name="tituloDescripcion" ></input>
                    <br></br>
                    <label className="tituloInputFormProducto">Descripcion</label>
                    <textarea type="text" placeholder="Descripcion" name="descripcion" className="inputDescripcionFormProducto"></textarea>
                </div>
        )
    }
}


export default FormInfoGeneral;