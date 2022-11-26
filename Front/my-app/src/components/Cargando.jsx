import React from "react";
import "../componentsStyle/cargando.css"

function Cargando(){

    return(
    <div className="loadingDiv">
        <div className="medio">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
    )
}

export default Cargando;