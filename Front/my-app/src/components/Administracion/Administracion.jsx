import React, { Component } from "react";
import Header from "./HeaderAdministracion"
import FormProductos from "./FormProductos";
import EditarProdcutos from "./EditarProducto"
import "../../componentsStyle/Administracion/administracion.css"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Administracion(){

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("rol")!=1) {
          navigate('/')
        }
        
      }) 


        return(
            <div className="paginaAdmin">
              
                <Header />

                <Tabs>
                  <TabList>
                    <Tab>Crear producto</Tab>
                    <Tab>Editar productos</Tab>
                  </TabList>

                  <TabPanel>
                    <FormProductos />
                    <h2>Hola</h2>
                  </TabPanel>
                  <TabPanel>
                    <EditarProdcutos />
                  </TabPanel>
                </Tabs>
                
            </div>
        )
    



}


export default Administracion;