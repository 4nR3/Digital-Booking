import { React, useRef, useState, useEffect } from 'react';
import { Link, useNavigate, navigate } from "react-router-dom";
import Axios from "axios";
import'../componentsStyle/RegistroStyle.css';
import PopUp from "./RegistroPopUp"
import link from "../components/Util"
import swal from "sweetalert";


function Registro() {

    const history = useNavigate();
      const [errorMessageMinPassword, setErrorMessageMinPassword] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const[isOpenPopUp, setOpenPopUp] = useState(false);
    let urlStart = link;

    

  const navigate= useNavigate()
    
  useEffect(() => {
    if (localStorage.getItem("jwt")!==null) {
      navigate('/')
    } 
  }, [])

    const nombreInputRef = useRef();
    const apellidoInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const rePasswordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredNombre = nombreInputRef.value;
        const enteredApellido = apellidoInputRef.value;
        const enteredEmail = emailInputRef.value;
        const enteredPassword = passwordInputRef.value;
        const enteredRePassword = rePasswordInputRef.value;

        const userData = {
            nombre: enteredNombre,
            apellido: enteredApellido,
            email: enteredEmail,
            contrasena: enteredPassword,
            role: {
                id: 1
            }
        }

        Axios.post(
            urlStart+`/usuario`,
            userData
        )
            .then((response) => {
                (response.status === 201) ? swal("Registro exitoso") : swal("Lamentablemente no ha podido registrarse. Por favor intente más tarde");
                (response.status === 201) ? history.push("/Login") : history.push("/Registro");
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })

        let flagPasswordLength = false;
        let flagPassword = false;

        if (enteredPassword.length < 6) {
            setErrorMessageMinPassword("La contraseña debe tener como mínimo 6 caracteres");
        } else {
            flagPasswordLength = true;
            setErrorMessageMinPassword("");
        }

        if (enteredPassword === enteredRePassword) {
            flagPassword = true;
            setErrorMessagePassword("");
        } else {
            setErrorMessagePassword("Las contraseñas no coinciden");
        }

        if (flagPassword && flagPasswordLength) {
            // localStorage.setItem("userData", JSON.stringify(userData));

        }

    }

    function comprobar(campo){
        if(campo==""||campo==null)
            return false;

        return true;
    }


    const enviarRegistro = (event)=>{
        event.preventDefault();

        let nombreI= document.getElementById("nombre").value;
        let apellidoI=document.getElementById("apellido").value;
        let emailI=document.getElementById("email").value;
        let contrasenaI=document.getElementById("password").value;
        let reContrasenaI=document.getElementById("rePassword").value;

        if(!(comprobar(nombreI) && comprobar(apellidoI) && comprobar(emailI) && comprobar(contrasenaI) && contrasenaI==reContrasenaI))
            {
                throw console.error("Campo vacio");
            }

        if(!(comprobar(nombreI))){

        }

        const userData = {
            nombre: nombreI,
            apellido: apellidoI,
            email: emailI,
            contrasena: contrasenaI,
            ciudad: "",
            Rol:{
                nombre:"USER"
            }
        }

        console.log(userData);

        const urlUser = urlStart+"/usuario";

        const configuracion = {
            method: 'POST',
      
            headers: {
      
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
      
            body: JSON.stringify(userData)
          }


        fetch(urlUser,configuracion)
        .then(respuesta=>{
            return respuesta.status;
        })
        .then(data=>{

            if(data!==201)
            {
                let error=document.getElementsByClassName("errorRegistro");
                error.classList.remove("error");
            }
            else
            {
                setOpenPopUp(true);
                console.log(isOpenPopUp);
            }
        })


    }

    sessionStorage.setItem("alertLogin","false")

    return (
        
        <div className="main__container">

            <div className='error' id='errorRegistro'>Lamentablemente no ha podido registrarse. <br></br>Por favor intente más tarde</div>

            <PopUp isOpenPopUP={isOpenPopUp} close={() => setOpenPopUp(false)} />

            <div className="form__container">
            <h1 className="tituloCrearCuenta">Crear cuenta</h1>
            <form action="" method="post" className='formularioRegistro' onSubmit={enviarRegistro}>

                <div className="form__nombreapellido">
                    <div className='divName'>
                        <label for="email" className="form__label">Nombre</label>
                        <input type="text" name="email" id="nombre" className="form__input form__input-nombreapellido" placeholder=' '/>
                    </div>

                    <div className='divSurName'>
                        <label for="email" className="form__label form__input-nombreapellido-derecha">Apellido</label>
                        <input type="text" name="email" id="apellido"
                            className="form__input form__input-nombreapellido form__input-nombreapellido-derecha" placeholder=' '/>
                        <br/>
                    </div>
                </div>

                <div className='divInfoForm'>
                    <label for="email" className="form__label">Correo electrónico</label>
                    <input type="email" name="email" id="email" className="form__input" placeholder=' '/><br/>
                </div>

                <div className='divInfoForm'>
                    <label for="password" className="form__label">Contraseña</label>
                    <input type="password" name="password" id="password" minlength="6"
                        className="form__input form__input-pass" placeholder=' '/>
                </div>


                <div className='divInfoForm'>
                    <label for="password" className="form__label">Confirmar contraseña</label>
                    <input type="password" name="password" id="rePassword" minlength="6" className="form__input" placeholder=' '/>
                </div>


                <div className="subirRegistro">
                    <button type="submit" className="botonRegistrar">Crear cuenta</button>
                </div>

            </form>
            <div className="cambiarALogin">
                <p>¿Ya tienes una cuenta?</p><Link to="/Login" className="form__txtextra__anchor">Iniciar sesión</Link>
            </div>

            </div>

        </div>
      
    )
  }

export default Registro;