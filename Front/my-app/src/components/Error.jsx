import React from "react";
import "../componentsStyle/error.css"

function ErrorPage(){

    return(
    <div className="errorDiv">
        <div className="mensajeError">
            <i class="far fa-dizzy" id="serverErrorIcon"></i>
            <h2 className="textoErrorPrincipal">Ups, parece que ha habido un problema con el servidor.</h2>
            <h2 className="textoErrorSecundario">Por favor,intente nuevamente más tarde</h2>
            <h4 className="textoErrorTerciario">Si el error persiste, por favor contacte con servicio al cliente</h4>
        </div>
    </div>
    )
}

export default ErrorPage;