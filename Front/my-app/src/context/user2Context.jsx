import { createContext, useState } from "react";

const User2Context = createContext(); 

const User2Provider = ({ children }) => {

const [nombreContext, setNombreContext] = useState(localStorage.getItem("nombre"));

const [emailContext, setEmailContext] = useState();
const [apellidoContext, setApellidoContext] = useState(localStorage.getItem("apellido"));

const [categoriaContext, setCategoriaContext] = useState(true);




 const data = { nombreContext, setNombreContext , emailContext, setEmailContext, apellidoContext, setApellidoContext
  };

  return <User2Context.Provider value={data}>{children}</User2Context.Provider>;
};

export { User2Provider };
export default User2Context;