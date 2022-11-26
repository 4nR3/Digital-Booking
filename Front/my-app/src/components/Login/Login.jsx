import React, {useContext, useState, useEffect } from 'react';
import '../Login/loginStyle.css';
import { Link, useNavigate } from "react-router-dom";
import { userContext } from '../../context/userContext';
import Credenciales from '../Login/Credenciales';
import user2Context from "../../context/user2Context";
import link from "../Util"

export const Login = () => {

  const { nombreContext, setNombreContext } =useContext(user2Context)
  const { apellidoContext, setApellidoContext } =useContext(user2Context)
  let urlStart = link;

  const {user, setUser}=useContext(userContext)
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const url=urlStart+'/authenticate';


  const navigate= useNavigate()
  

  /*Redireccion cuando está logeado */
  const mensaje=sessionStorage.getItem("alertLogin")

  useEffect(() => {
    if (localStorage.getItem("jwt")!==null) {
      navigate('/')
    } 
  }, [])


  const submitHandler = (event) => {
    event.preventDefault();

    if (email!== "" || password!== "") {
      setErrorMessage('El correo o la contraseña son invalidas.')
      
    } else {
      setUser(true)
      navigate("/", {
        replace: true,
      });
      
      
      
    }
  };

  const subir = (event)=>{
    setUser(true)
    navigate("/", {
      replace: true,
    });    
  }

  const subir2 = (event)=>{
    
    event.preventDefault();
    const usuario = {
      username: email,
      password: password}

    const configuracion = {
      method: 'POST',

      headers: {

          'Content-Type': 'application/json',

          'Access-Control-Allow-Origin': '*'

      },

      body: JSON.stringify(usuario)
    }


    fetch(url,configuracion)

    .then( respuesta=>{
     
        localStorage.setItem("userAuth", true);
        localStorage.setItem("token", respuesta.headers.token);
      return respuesta.json()
    })

    .then(data=>{
      
      console.log(data.status)
      if(data.status>= 400 || data.status <= 599){
      setErrorMessage('El correo o la contraseña son invalidas.')}
      
      if(data.jwt){
        localStorage.setItem('jwt', data.jwt);
        setUser(true)

        let jwt = localStorage.getItem("jwt");

    const configuraciones = {

      method: 'GET',
      headers: {
        authorization: 'Bearer ' + jwt
      }
    }

    const urlUser = urlStart+"/usuario/"+email;

    

    fetch(urlUser, configuraciones)

      .then((respuesta) =>  
        {console.log(respuesta)
          return respuesta.json()
          }
        )
        
      .then(data => {

        Credenciales.nombre=data.nombre;
        Credenciales.apellido=data.apellido;
        Credenciales.email=data.email;
        console.log(data)
        setNombreContext(data.nombre)
        setApellidoContext(data.apellido)
        localStorage.setItem("nombre", data.nombre);
        localStorage.setItem("apellido", data.apellido);
        localStorage.setItem("email" , data.email)
        localStorage.setItem("idUsuario", data.idUsuario);
        localStorage.setItem("rol", data.rol.idRoles);
        if(mensaje){
          navigate(-1,{
            replace: true,
          })
           sessionStorage.setItem("alertLogin","false")
        }else {navigate("/", {
          replace: true,
        }); }   

      })
      if(mensaje){
        navigate(-1,{
          replace: true,
        })
        sessionStorage.setItem("alertLogin","false")

      }else {navigate('/')
      sessionStorage.setItem("alertLogin","false")

      ; }  

      
      sessionStorage.setItem("alertLogin","false")

      }
      
    })
    .catch( (error) => {console.log("Error",error)
    const errorMsj = document.getElementById("error");
    errorMsj.style.setProperty("display", "block")
    //poner el catch antes y si me tira status de error que se vea el mensaje?
  } )
    

  }


  return (
    <div>
      <div className="cabecera">
    <div className='error' id='error'>Lamentablemente no ha podido iniciar sesion. <br></br>Por favor intente más tarde</div>
        <div className="form__container">
       
       {mensaje == "true" ? <div className='loginError'><p className='mensaje'> <i class="fas fa-exclamation-circle" id='iErrorLogin'></i> Debe logearse para iniciar una reserva</p> </div> : <></> }
          <h1 className="form__ttl">Iniciar Sesion</h1>
          <form className="login-form" onSubmit={subir2}>
            <label className="form__label" htmlFor="login-email">Correo electrónico</label>
            <input
              id="login-email"
              type="email"
              name="email"
              onChange={handleChangeEmail}
              required
              className="form__input"
              placeholder=' '
            /><br />
            <label className="form__label" htmlFor="login-password">Contraseña</label>
            <input
              id="login-password"
              type="password"
              name="password"
              onChange={handleChangePassword}
              required
              minLength="6"
              className="form__input form__input-pass"
              placeholder=' '
            /><br />
            {errorMessage && (
              <small className="error-login"> {errorMessage} </small>
            )}
           
            <div className="subirLogin">
           <button type="submit" className="botonIngresar">Ingresar</button>
            </div>

           

          </form>
          <div className="cambiarARegistro">
            <p className="textoParaRegistro">¿Aún no tienes cuenta? <Link to="/Registro">Regístrate</Link></p>
          </div>

        </div>

      </div>



    </div>

  )
}
export default Login
