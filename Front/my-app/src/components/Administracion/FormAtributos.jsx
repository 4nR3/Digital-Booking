import React, { Component } from "react";
import { useState } from "react";
import "../../componentsStyle/Administracion/formAtributos.css"
import RSelect from "react-select";
import link from "../Util"
import { useFetch } from '../../hooks/useFetch';

function FormAtributos(){

    let style = {
        option:(provided, state) => ({
            ...provided,
            'border-bottom': '1px solid #0c0a0a',
             'background-color': state.isSelected ? 'white' : 'white',
             color: state.isSelected ? 'black' : 'black',
             height:38 ,}),

        menu:(provided)=>({
            ...provided,
            width: '100%',
        }),

        control:(provided)=>({
            ...provided,
            width: '100%',
            height: 40,
        })


    }


        const [listaAtributos,setListaAtributos] = useState([{atributo:""}]);


        let urlStart = link;
        const { data } = useFetch(urlStart+`/caracteristica`)
        let infoAtributo = [];

        const agregarAtributo = (event) =>{
            event.preventDefault();
            setListaAtributos([...listaAtributos,{atributo:""}])
        }
        
        const eliminarAtributo = (index,e) =>{
            e.preventDefault();
            const lista = [...listaAtributos];
            lista.splice(index,1);
            setListaAtributos(lista);
        }

        const onchange = (index , e) =>{
            const {name,value} = e.target;
            const lista = [...listaAtributos];
            lista[index][name] = value;
            setListaAtributos(lista);
        }

        return(data &&
            <div className="atributosPropiedad">
                <div className="escondido">
                {data.map(item=>(
                                    infoAtributo.push({value: item.idCaracteristica, label: <i className={item.clase} />})
                                ))
                }
                </div>

                {
                listaAtributos.map((item,index)=>(
                <div className="atributo" >
                    <div className="nombreAtributoPropiedad" key={index}> 
                        <label className="labelAtributoPropiedad">Nombre</label>
                        <input placeholder="" name="atributoNombre" className="inputNombreAtributoPropiedad" value={item.atributoNombre} onChange={(e)=>onchange(index,e)}></input>
                    </div>

                    <div className="iconoAtributoPropiedad" key={index}>
                        <label className="labelAtributoPropiedad">Icono</label>
                        <RSelect options={infoAtributo} placeholder={"Seleccione un icono"} styles={style} name="atributoIcono">  
                        
                    </RSelect>
                    </div>
                    {listaAtributos.length-1 > index ?(
                        <button className="sumarAtributo" onClick={(e)=> eliminarAtributo(index,e)}>x</button>

                    ):
                    (
                        <button className="sumarAtributo" onClick={agregarAtributo}>+</button>
                    )

                    }

                </div>
                ))
                }

            </div>
        )
    



}



export default FormAtributos;