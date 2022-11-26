import { useState } from "react";
import '../../componentsStyle/producto/compartirProducto.css';
import RedesSocialesProducto from "./RedesSocialesProducto";



const CompartirProducto = () =>{
    const[isOpen, setOpen] = useState(false);

    return (
        <>
        
        <div className="iconosShare__container">
            <button className= "iconosShare__share__btn" onClick={() => setOpen(true)}><span id="share__icono" class="material-symbols-outlined"> share </span></button>
            <RedesSocialesProducto isOpen={isOpen} close={() => setOpen(false)}> </RedesSocialesProducto>
        </div>
        
        </>
    )

} 

export default CompartirProducto;