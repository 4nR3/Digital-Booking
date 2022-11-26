import '../../componentsStyle/producto/bloquePoliticaProducto.css';
import posicion from '../../img/posicion.png';


export default function BloquePoliticaProducto({normas,seguridad,cancelacion }){


    return (
        <div className="politicaProducto__container">
            <div className="politicaProducto__titulo__container">
                <h2 className="politicaProducto__titulo">¿Qué tenés que saber?</h2>  
            </div>  

            <div className="politicaProducto__servicios__container">
                <div className="politicaProducto__servicios">
                    <h3 className="politicaProducto__titulo__especifico">Normas de la casa</h3>
                    <p className="politicaProducto__txt">{normas}</p>
                </div>

                <div className="politicaProducto__servicios">
                    <h3 className="politicaProducto__titulo__especifico">Salud y Seguridad</h3>
                    <p className="politicaProducto__txt">{seguridad}</p>
                </div>

                <div className="politicaProducto__servicios">
                    <h3 className="politicaProducto__titulo__especifico">Politica de cancelación</h3>
                    <p className="politicaProducto__txt">{cancelacion}</p>
                </div>

                

            </div>

        </div>

    )

}