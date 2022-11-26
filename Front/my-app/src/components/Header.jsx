import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotonAtras from "./BotonAtras";
import BotonRegister from "./BotonRegister";
import "../componentsStyle/HeaderStyle.css";
import Logged from "./Logged";
import BotonLogin from "./BotonLogin";
import logo from '../img/logo 1.png';
import logo_texto from '../img/texto_logo.png';

/*Se usa este Header? Si no eliminar */

localStorage.setItem("logeado", false)

export default function Header() {
    
    const [logeado, setLogeado] = useState();
    useEffect(() => {
        const item = (window.localStorage.getItem("logeado") === 'true') ? true : false;
        if (item) setLogeado(item);

    }, []);

    return (
        < >
            <header className="header">
                <Link to="/"> 
                <div className="header__img__container">
        
                    <img className="logo" src={logo} alt="logo" />
                    <img className="logo_txt" src={logo_texto} alt="Frase" />
                </div>                
                
                </Link>
                {logeado ?
                    <Logged />
                    :
                    <div className="header__derechaContainer">
                        <Link to="Registro"> <BotonRegister /></Link>
                        <Link to="Login"><BotonLogin /></Link>
                        <Link to="/"><BotonAtras /></Link>

                        
                        
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        

                    </div>

                    
                }

                

            </header> 
                
            
        </>


    )



    /* return (
        < >
            <header className="header">
                <Link to="/"> 
                <div className="header__img__container">
        
                    <img className="logo" src={logo} alt="logo" />
                    <img className="logo_txt" src={logo_texto} alt="Frase" />
                </div>                
                
                </Link>
                {logeado ?
                    <Logged />
                    :
                    <div className="header__derechaContainer">
                        <Link to="Registro"> <BotonRegister /></Link>
                        <Link to="Login"><BotonLogin /></Link>
                        <Link to="/"><BotonAtras /></Link>


                    </div>
                }

                

            </header> 
                
            <div className="subHeaderContent" id="bloqueBuscador">
                    <BloqueBuscador/>
                    <div className='subHeader'>
                        <Ciudades/>
                        <BusquedaCalendario/>
                        <Buscar/>
                    </div>
                </div>



                <div className="subHeaderContent" id="bloqueCategoria">
                    <BloqueCategoria/>
                    
                </div>        



        </>


    )  */
} 

