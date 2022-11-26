import '../../componentsStyle/producto/bloqueCaracteristicasProducto.css';
import posicion from '../../img/posicion.png';


export default function BloqueCaracteristicasProducto({caracteristica}){


    return (

        <div className="caracteristicasProducto__container">
            <div className="caracteristicasProducto__titulo__container">
                <h2 className="caracteristicasProducto__titulo">¿Qué ofrece este lugar?</h2>  
            </div>  


            <div className="caracteristicasProducto__servicios__container">
            {caracteristica.map(item=>(<div  key={item.idCaracteristica}>
                <div className="caracteristicasProducto__servicios">
                <div className="caracteristicasProducto__img">
                        <i class={item.clase} />
                    </div>

                    <p className="caracteristicasProducto__txt">{item.nombre}</p>
                </div>
                              

            </div>))}


            </div>



        </div>

    )

}