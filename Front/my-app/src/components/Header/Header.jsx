import React, { useState, useEffect,useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import BotonAtras from "../BotonAtras";
import BotonRegister from "../BotonRegister";
import "../../componentsStyle/HeaderStyle.css"
import BotonLogin from "../BotonLogin";
import logo from '../../img/logo 1.png';
import logo_texto from '../../img/texto_logo.png';
import { userContext } from '../../context/userContext'
import Avatar from "../Avatar/Avatar";
import Navbar from "../Nav/Navbar";
import MenuButton from "../Nav/MenuButton";


export default function Header() {
    const {user, setUser}=useContext(userContext)

    useEffect(() => {
        if (localStorage.getItem("jwt")!==null) {
          setUser(true)
        }else{setUser(false)}
      }, [])

    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(!open);
    };

    return (
        < >
            <header className="header">
                <Link to="/" className="aLogo"> 
                <div className="header__img__container">
        
                    <img className="logo" src={logo} alt="logo" />
                    <img className="logo_txt" src={logo_texto} alt="Frase" />
                </div>                
                
                </Link>
                {user === true ? <Avatar/>: 
                    <div className="header__derechaContainer">
                        <NavLink to="Registro"> <BotonRegister /></NavLink>
                        <NavLink to="Login"><BotonLogin /></NavLink>
                        
                        <div className='Navbar_header'>
                            <Navbar open={open}/>
                            <MenuButton open={open} handleClick={handleClick} className="anvorgesa"/>
                        </div>
                        
                    </div>}

                    
                        
            
            
            </header> 
        </>
    )
}


