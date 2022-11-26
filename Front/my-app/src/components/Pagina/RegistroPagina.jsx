import React  from "react";
import Header from "..Header";
import Registro from "../Registro";
import Footer from "../Footer";

export const RegistroPagina = () => {
  return (
    <>
      <Header
        login = {false}
        registro = {true}
      />
      <main>
        <Registro/>
      </main>
      <Footer />
    </>
  )
}