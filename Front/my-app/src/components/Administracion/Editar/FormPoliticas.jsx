import React, { Component } from "react";
import "../../../componentsStyle/Administracion/formPoliticas.css"

function FormPoliticas(info){

        return(
            <div className="politicasPropiedad">
                <div className="cajaPoliticas"> 
                    <div className="normas">
                        <h3 className="tituloBloquePolitica">Normas de la casa</h3>
                        <label>Descripcion</label>
                        <textarea placeholder="Escribir aqui" name="politicaDescripcionEditar" className="cajaDescripcionPolitica" defaultValue={info.info.normas}></textarea>
                    </div>
                    <div className="saludYSeguridad">
                        <h3 className="tituloBloquePolitica">Salud y seguridad</h3>
                        <label>Descripcion</label>
                        <textarea placeholder="Escribir aqui" name="politicaSaludYSeguridadEditar" className="cajaDescripcionPolitica" defaultValue={info.info.seguridad}></textarea>
                    </div>
                    <div className="cancelacion"> 
                        <h3 className="tituloBloquePolitica">Politica de cancelacion</h3>
                        <label>Descripcion</label>
                        <textarea placeholder="Escribir aqui" name="politicaCancelacionEditar" className="cajaDescripcionPolitica" defaultValue={info.info.cancelacion}></textarea>
                    </div>
                </div>
            </div>
        )
    
}

export default FormPoliticas;