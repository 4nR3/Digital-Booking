import '../../componentsStyle/producto/bloqueImagenesProducto.css';
import departamento from "../../img/departamento.jpg";
import cerrar from '../../img/x.png';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


const BloqueImagenesProducto = (props) => {
  let imagenes=[];
    
   for(let f=0; f<props.props.imagen.length;f++){
    imagenes.push({
      src: props.props.imagen[f].url
    })
   }

      let tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      let h=0;
      let w=0;

      if(!props.isOpen) {return null};

      if(tamano<=420)
        {
            return (
              <div className= "modal__imagenes__container">
          <div className= "carrousel__container">
                <Carousel images={imagenes} style={{ height: 500, width: "413px" }} isAutoPlaying={true} autoPlayInterval={3000} />
                </div>
                </div>
            )
        }
     else
    if(tamano>=1366)
        {
        return (
            <div className= "modal__imagenes__container">
          <div className= "carrousel__container">
          <Carousel  images={imagenes} style={{ height: 500, width: "750px" }}/>
              <button className='carrousel__desktop__btn__salir' onClick={() => props.close(false)} ><img className="carrusel__cerrar__img" src={cerrar} alt="cerrar" /></button>
          </div>
      </div>
        )
        }
    else
    {
        return (
            <Carousel images={imagenes} style={{ height: 500, width: "100%" }}/>
        )
    }
}

export default BloqueImagenesProducto;