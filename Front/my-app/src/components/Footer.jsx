import React from "react";
import { Component } from "react";

import "../componentsStyle/FooterStyle.css";

class Footer extends Component{
    render(){
        return(
            <div className="divFooter">
                    <footer>
                        <div className="logotipo">
                            <h2> ©2021 Digital Booking</h2>
                        </div>
                        <div className="redes">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <i className="fab fa-instagram"></i>
                            
                        </div>
                    </footer>
            </div>

        );
    }


}


export default Footer;