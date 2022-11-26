import '../../componentsStyle/producto/redesSocialesProducto.css';
import React, {useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import StateContext from "../../context/StateContext";
import link from "../../components/Util"
import { userContext } from '../../context/userContext'

import Producto from './Producto';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";
import cerrar from '../../img/x.png';

const RedesSocialesProducto = ({isOpen, close}) => {
    

     const shareUrl = 'http://0621c1g3anita.s3-website-us-west-2.amazonaws.com/'; 
    /* let urlStart = link; */

  /* const {id}  =useParams()
  const {data} = useFetch(urlStart+`/producto/${id}`)
  
  const producto= data;

  const shareUrl= producto; */
    

  
  
  
                


        let tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
        let h=0;
        let w=0; 
  
        if(!isOpen) {return null};

        return (
            <div className= "modal__redesSociales__container">
                <div className= "iconos__redesSociales__container">
                    
                        <p className= "header__redessociales__txt">Comparte este producto en tus redes sociales: </p>
                        < button className='iconos__btn__salir' onClick={() => close(false)} ><img className="iconos__cerrar__img" src={cerrar} alt="cerrar" /></button>
                    

                    <div className="modal__redessociales__iconos">
                        
                            <FacebookShareButton url={shareUrl} hashtag={'#Vacaciones'}>
                                <FacebookIcon size={40} round={true}/>
                            </FacebookShareButton>
                            <PinterestShareButton url={shareUrl}>
                                <PinterestIcon size={40} round={true}/>
                            </PinterestShareButton>
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={40} round={true}/>
                            </TwitterShareButton>
                            <TelegramShareButton url={shareUrl}>
                                <TelegramIcon size={40} round={true}/>
                            </TelegramShareButton>
                            <WhatsappShareButton url={shareUrl}>
                                <WhatsappIcon size={40} round={true}/>
                            </WhatsappShareButton>
                            
                        
                    </div>
                    
                </div>
            </div>)
  
  }
  
  export default RedesSocialesProducto;
  