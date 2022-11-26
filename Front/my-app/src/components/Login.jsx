import React, { useEffect, useRef, useState } from 'react';
import '../componentsStyle/LoginStyle.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import qs from "qs";

 
export const Login = (props) => {
  const history = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [reservationMessage, setReservationMessage] = useState("");

  const loginEmailInputRef = useRef();
  const loginPasswordInputRef = useRef();

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = async (e) => {
    await setUserForm({
      ...userForm,
      [e.target.nombre]: e.target.value,
    });
  };

  useEffect(() => {
    if (location.state !== undefined) {
      setReservationMessage(location.state)
    }
  }, [setReservationMessage, props, location])

  const submitHandler = (event) => {
    event.preventDefault();

    Axios({
      method: "post",
      url: "http://localhost:8080/login",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(userForm),
    })
      .then((response) => {
        if (response.status === 200 && location.state === undefined) {
          localStorage.setItem("userAuth", true);
          localStorage.setItem("token", response.headers.token);
          setErrorMessage("");
          setReservationMessage("");
          history.push("/");
        }
        if (response.status === 200 && location.state !== undefined) {
          localStorage.setItem("userAuth", true);
          localStorage.setItem("token", response.headers.token);
          setErrorMessage("");
          setReservationMessage("");
          history.push(`/product/${localStorage.getItem("idProduct")}`);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          "Por favor, vuelva a intentarlo sus credenciales son inválidas"
        );
      });

    Axios({
      url: `http://localhost:8080/user/email/${userForm.email}`,
    })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("userInfo", JSON.stringify({
            id: response.data.id,
            nombreUsuario: response.data.nombre,
            apellido: response.data.apellido,
            email: response.data.email,
            role: response.data.role.id
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
 
  return (
    <div>
    <div className="cabecera">
    <div className="form__container">
      <h1 className="form__ttl">Iniciar Sesion</h1>
      {reservationMessage && (<small className="reservation-message"> {reservationMessage} </small>)}
        <form className="login-form" onSubmit={submitHandler}>
          <label className="form__label" htmlFor="login-email">Correo electrónico</label>
          <input
            id="login-email"
            type="email"
            name="email"
            required
            ref={loginEmailInputRef}
            onChange={onChangeHandler}
            className="form__input"
          /><br/>
          <label className="form__label" htmlFor="login-password">Contraseña</label>
          <input
            id="login-password"
            type="password"
            name="password"
            required
            minLength="6"
            ref={loginPasswordInputRef}
            onChange={onChangeHandler}
            className="form__input form__input-pass"
          /><br/>
          {errorMessage && (
          <small className="error-login"> {errorMessage} </small>
        )}
          <div className="subirLogin">
            <button type="submit" className="botonIngresar" href="/">Ingresar</button>
          </div>

        
        </form>
        <div className="form__txtextra">
          <p>¿Aún no cuenta?</p><a href='/Registro' className="form__txtextra__anchor">Registrate</a>
        </div>
       
        </div>
       
    </div>
   
   
   
    </div>
   
  )

  function Logearse(){
    const [logeado, setLogeado] = useState();
    useEffect(() => {
        const item = (window.localStorage.getItem("logeado") === 'true') ? true : false;
        if (item) setLogeado(item);

    }, []);

  }

}
 
export default Login
