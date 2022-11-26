import { createContext, useContext, useState } from "react";
import { userContext } from '../context/userContext'
import link from "../components/Util"

const StateContext = createContext(); 

const StateProvider = ({ children }) => {
  const {user}=useContext(userContext)

  let urlStart = link;

  let initialState = urlStart+"/producto/aleatorios";

  if (localStorage.getItem("jwt")!=null) 
  {
  initialState = urlStart+"/producto/";
} else{
    initialState = urlStart+"/producto/aleatorios"
  }

const [dataContext, setDataContext] = useState(initialState);

const [ciudadContext, setCiudadContext] = useState(false);
const [idCiudadContext, setIdCiudadContext] = useState("");

const [categoriaContext, setCategoriaContext] = useState(true);
const [idCategoriaContext, setIdCategoriaContext] = useState("");

const [fechaContext, setFechaContext] = useState("");
const [idFechaContext, setIdFechaContext] = useState("");
const [fechaCalendarContext, setFechaCalendarContext] = useState("");

const [fechainicio, setFechainicio] = useState(null);
const [fechafin, setFechafin] = useState(null);


/*if(ciudadContext){console.log("ciudad contex true");
setDataContext("con ciudad true")
}if(categoriaContext){ console.log("categoria context true")
setDataContext("categoria true")
}
if(categoriaContext=="algo"){ console.log("categoria context true")
setDataContext("categoria true")
}
else{

  //setDataContext("aca no pasó nada") // cuando se ejecuta el else me tira error, tratar de no usar
}*/



  const data = { dataContext, setDataContext , ciudadContext, setCiudadContext, categoriaContext, setCategoriaContext,
    idCiudadContext, setIdCiudadContext, idCategoriaContext, setIdCategoriaContext, idFechaContext, setIdFechaContext,
    fechaContext, setFechaContext, fechaCalendarContext, setFechaCalendarContext, fechainicio, setFechainicio,
    fechafin, setFechafin
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export { StateProvider };
export default StateContext;