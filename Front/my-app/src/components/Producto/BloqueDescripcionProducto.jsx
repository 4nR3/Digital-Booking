import '../../componentsStyle/producto/bloqueDescripcionProducto.css';


export default function BloqueDescripcionProducto({info}){


    return (
        <div className="descripcionProducto__container">
            <h2 className="descripcionProducto__titulo">{info.tituloDescripcion}</h2>
            <p className="descripcionProducto__detalle">{info.descripcion}</p>
        </div>
    )


}
