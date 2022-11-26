import BloqueBuscador from "./BloqueBuscador";
import BloqueCategoria from "./BloqueCategoria";
import BloqueListado from "./BloqueListado";

import "../componentsStyle/Home.css"
import { StateProvider } from "../context/StateContext";
import { useState } from "react";

const Home = () => {

  sessionStorage.setItem("alertLogin","false")
  let tamanoPantalla = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  localStorage.setItem("tamano",tamanoPantalla);

    return (
      <div className="debajoDelHeader">
          <StateProvider>
          <BloqueBuscador/>
            <BloqueCategoria/>
            <BloqueListado/>
            </StateProvider>
            
      </div>
            
            
    )
  }
  
  export default Home