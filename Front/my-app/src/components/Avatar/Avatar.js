import React from "react";

import StackedAvatar from "./stacked-avatar";
import Credenciales from "../Login/Credenciales";
import Logout from "../Login/Logout";
import { useContext} from "react";
import user2Context from "../../context/user2Context";
import { NavLink } from "react-router-dom";

import "./avatar.css";

const Avatar = () => {

  const { nombreContext, setNombreContext } =useContext(user2Context)
  const { apellidoContext, setApellidoContext } =useContext(user2Context)

  const rol = localStorage.getItem("rol")

  const avatars = [
    {
      twitterHandle: " ",
      name: `${nombreContext} ${Credenciales.apellido}`,
    },
  ];
  return (
    <div className="avatar">
      {rol== 1 ? <NavLink to={"Administracion"}>Administracion</NavLink>:
     <NavLink to={"MisReservas"}>Mis reservas </NavLink>}
      <StackedAvatar maxAvatars={1} round={true} size={50} avatars={avatars} />
      <div className="bienvenido">
        <div className="saludo">
          <p>Hola,</p>
          <Logout />
        </div>
        <p className="nombre-avatar">
          {" "}
          {`${nombreContext} ${apellidoContext}`}
        </p>
      </div>
    </div>
  );
};

export default Avatar;