import React from "react";
import Header from "../Header";
import Login from "../Login";
import Footer from "../Footer";

export const LoginPagina = () => {
  return (
    <>
      <Header
        login = {true}
        registro = {false}
      />
      <main>
        <Login/>
      </main>
      <Footer/>
    </>
  )
}