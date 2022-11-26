import { useState } from "react";
import '../../componentsStyle/producto/bloqueImagenGrid.css';
import departamento from "../../img/departamento.jpg";
import BloqueImagenesProducto from "./BloqueImagenesProducto";

const BloqueImagenGrid = (props) =>{
    const[isOpen, setOpen] = useState(false);
    
    return (
        <>
        <div className="grid___container">
            <div className="img__container--img--grande"><img  className="img__grid" src={props.imagen[2].url} alt="" /></div>
            <div className="img__container--chica1"><img  className="img__grid" src={props.imagen[0].url} alt="" /></div>
            <div className="img__container--chica2"><img  className="img__grid" src={props.imagen[1].url} alt="" /></div>
            <div className="img__container--chica3"><img  className="img__grid" src={props.imagen[3].url} alt="" /></div>
            <div className="img__container--chica4"><img  className="img__grid" src={props.imagen[4].url} alt="" /></div>
            <div className="grid__container--txt">
                <button className= "grid__contariner__btn" onClick={() => setOpen(true)}> Ver más </button>
                <BloqueImagenesProducto  props={props} isOpen={isOpen} close={() => setOpen(false)}></BloqueImagenesProducto> 
            </div>

        </div>
        
        </>
    )

} 

export default BloqueImagenGrid;

/* export default function BloqueImagenGrid(){
    return (
        <div className="grid___container">
            <div className="img__container--img--grande"><img  className="img__grid" src={departamento} alt="" /></div>
            <div className="img__container--chica1"><img  className="img__grid" src={departamento} alt="" /></div>
            <div className="img__container--chica2"><img  className="img__grid" src={departamento} alt="" /></div>
            <div className="img__container--chica3"><img  className="img__grid" src={departamento} alt="" /></div>
            <div className="img__container--chica4"><img  className="img__grid" src={departamento} alt="" /></div>
            <div className="grid__container--txt"><p>Ver más</p></div>
        </div>
    )

} */