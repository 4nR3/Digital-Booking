import { useEffect,useState } from "react";

export const useFetch = (url,cuerpo) => {

    const [data,setData] =useState() //Si Devuelve un array van corchetes?
    const [error, setError ] =useState("")
    const [loading, setLoading] = useState(false)

useEffect(()=>{
    setLoading(true)
    fetch(url) //solo para GET
    .then(res=>res.json()) //EL THEN NOS TRAE UNA RESPUESTA Y LA TRANSFORMAMOS EN JSON
    .then(data=>setData(data)) //obtenemos una data que es la que vamos a utilizar
    .catch(e=>setError("Error de servidor"))   //manejamos el error
    .finally(()=>setLoading(false)) //cuando termina la solicitud el loading es false
},[url])

    return{data, error, loading};
}