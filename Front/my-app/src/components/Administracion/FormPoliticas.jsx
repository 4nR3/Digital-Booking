import React, { Component } from "react";
import "../../componentsStyle/Administracion/formPoliticas.css"

class FormPoliticas extends Component{

    render(){
        return(
            <div className="politicasPropiedad">
                <div className="cajaPoliticas"> 
                    <div className="normas">
                        <h3 className="tituloBloquePolitica">Normas de la casa</h3>
                        <label>Descripcion</label>
                        <textarea placeholder="Escribir aqui" name="politicaDescripcion" className="cajaDescripcionPolitica"></textarea>
                    </div>
                    <div className="saludYSeguridad">
                        <h3 className="tituloBloquePolitica">Salud y seguridad</h3>
                        <label>Descripcion</label>
                        <textarea placeholder="Escribir aqui" name="politicaSaludYSeguridad" className="cajaDescripcionPolitica"></textarea>
                    </div>
                    <div className="cancelacion"> 
                        <h3 className="tituloBloquePolitica">Politica de cancelacion</h3>
                        <label>Descripcion</label>
                        <textarea placeholder="Escribir aqui" name="politicaCancelacion" className="cajaDescripcionPolitica"></textarea>
                    </div>
                </div>
            </div>
        )
    }



}

export default FormPoliticas;