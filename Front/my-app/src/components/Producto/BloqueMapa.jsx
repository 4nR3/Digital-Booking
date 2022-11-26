import React, { Component } from "react"
import GoogleMaps from "simple-react-google-maps"
import "../../componentsStyle/producto/mapa.css"

function Mapa(ubicacion){

        return(
            <div className="divMapa">
                <div className="dondeVasAEstar">
                    <h2 className="h2DondeVasAEstar">¿Dondé vas a estar?</h2>
                </div>
                <p>{ubicacion.ubicacion.ciudad.nombre +", " + ubicacion.ubicacion.ciudad.provincia +", " +ubicacion.ubicacion.ciudad.pais }</p>
                <div className="contenedorMapa">
                    <GoogleMaps
                    apiKey={"AIzaSyDqtY6D8nZJoSyjjJg2ArdXVtiQC87so3Q"}
                    style={{height: "100%", width: "100%", 'border-radius': '5px',}}
                    zoom={18}
                    center={{lat: ubicacion.ubicacion.latitud, lng: ubicacion.ubicacion.longitud}}
                    markers={{lat: ubicacion.ubicacion.latitud, lng: ubicacion.ubicacion.longitud}}
                    />
                </div>
            </div>
        )
}

export default Mapa;
