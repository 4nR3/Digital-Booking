import '../../componentsStyle/producto/bloqueImagenesProducto.css';
import departamento from "../../img/departamento.jpg";
import cerrar from '../../img/x.png';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import '../../componentsStyle/producto/CarouselImagenesMobile.css';


const BloqueImagenesProducto = ({isOpen, close}) => {
  const imagenes=[];
    
    imagenes.push({
        src: `https://elcomercio.pe/resizer/02VIzTJ4A2UsfFhDU5Fp-HWFLp4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5N6HAL2ZAZBIFN5M4ZPSXC7LOQ.jpg`
      });

      imagenes.push({
        src: `https://www.inmuebles24.com/noticias/wp-content/uploads/2020/01/departamentos-de-lujo-2.jpeg`
      });

      imagenes.push({
        src: `https://venturadistrict.com/wp-content/uploads/2020/08/Departamentos-pics-HD-05.jpg`
      });

      imagenes.push({
        src: `https://www.marhnoshabitat.mx/hubfs/2019/BLOG/marzo/departamentos-lujosos-en-Guadalajara.jpg`
      });

      imagenes.push({
        src: `https://http2.mlstatic.com/D_NQ_NP_988896-MLA49333514940_032022-W.jpg`
      });
    

      let tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if(tamano<=420)
      {
          return (
              <Carousel images={imagenes} style={{ height: 275, width: "100%" }} isAutoPlaying={true} autoPlayInterval={3000} />
          )
      }
    else
    if(tamano>=768)
      {
      return (
          <div className='imagense'>
              <Carousel images={imagenes} style={{ height: 400, width: "100%" }} isAutoPlaying={true} autoPlayInterval={3000}/>
          </div>
      )
      }
}

export default BloqueImagenesProducto;



/* export default function BloqueImagenesProducto(){

    const imagenes=[];
    
    imagenes.push({
        src: `https://elcomercio.pe/resizer/02VIzTJ4A2UsfFhDU5Fp-HWFLp4=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/5N6HAL2ZAZBIFN5M4ZPSXC7LOQ.jpg`
      });

      imagenes.push({
        src: `https://www.inmuebles24.com/noticias/wp-content/uploads/2020/01/departamentos-de-lujo-2.jpeg`
      });

      imagenes.push({
        src: `https://venturadistrict.com/wp-content/uploads/2020/08/Departamentos-pics-HD-05.jpg`
      });

      imagenes.push({
        src: `https://www.marhnoshabitat.mx/hubfs/2019/BLOG/marzo/departamentos-lujosos-en-Guadalajara.jpg`
      });

      imagenes.push({
        src: `https://http2.mlstatic.com/D_NQ_NP_988896-MLA49333514940_032022-W.jpg`
      });
    

      let tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      let h=0;
      let w=0;

      if(tamano<=420)
        {
            return (
                <Carousel images={imagenes} style={{ height: 500, width: "413px" }} isAutoPlaying={true} autoPlayInterval={5000} />
            )
        }
     else
    if(tamano>=1366)
        {
        return (
            <div className='imagense'>
                <Carousel images={imagenes} style={{ height: 500, width: "820px" }}/>
            </div>
        )
        }
    else
    {
        return (
            <Carousel images={imagenes} style={{ height: 500, width: "100%" }}/>
        )
    }

    

} */