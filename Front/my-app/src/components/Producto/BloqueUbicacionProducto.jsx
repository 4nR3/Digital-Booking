import '../../componentsStyle/producto/bloqueUbicacionProducto.css';
import posicion from '../../img/posicion.png';


export default function BloqueUbicacionProducto({ciudad}){


    return (
        <div className="ubicacionProducto__container">
            <div className="ubicacionProducto__izquierda__container">
                <div className="ubicacionProducto__ubicacion__container">
                    
                    <img className="ubicacionProducto__img" src={posicion} alt="posicion" />
                    <p className="ubicacionProducto__txt">{ciudad.nombre}, {ciudad.provincia}, {ciudad.pais} </p>
                </div>
                
                <p className="ubicacionProducto__distancia">A 940 m del centro</p>
            </div>
            <div className="ubicacionProducto__derecha__container">
                
            </div>
        </div>
    )


}

// <i className="ciudad__icono"  class="fas fa-map-marker-alt"></i>
