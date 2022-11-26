import React , {useState}  from "react";
import InfoGeneral from "./FormInfoGeneral"
import Atributos from "./FormAtributos"
import Politicas from "./FormPoliticas"
import Imagenes from "./FormImagenes"
import Descripcion from "./FormDescripcion"
import link from "../../Util"
import swal from "sweetalert";


function PaginaEditar(props){

    let style={
        color: 'white',
        position: 'relative',
    }

    let contentStyle={


    }

    return(
        <div className="crearProductos">
            <h2 style={style}>Editar producto</h2>
            <div className="formProductos">
                <form className="formContainer" onSubmit={enviarProductoNuevo}>
                    <InfoGeneral info={props.infoProducto}/>
                    <Descripcion info={props.infoProducto} />
                    <h3>Agregar atributos</h3>
                    <Atributos info={props.infoProducto} />
                    <h3>Políticas del producto</h3>
                    <Politicas  info={props.infoProducto}/>
                    <h3>Cargar imágenes</h3>
                    <Imagenes  info={props.infoProducto}/>
                    <button className="enviarProductoNuevo" type="submit">Actualizar</button>
                </form>
            </div>
        </div>
    )



    function comprobar(palabra){

        if(palabra==="" || palabra===null || palabra===undefined || palabra===" ")
            return false;
    
        return true;
    }
    
            
    async function enviarProductoNuevo(event){
        event.preventDefault();
        const urlStart = link;
    
        let formId = props.infoProducto.idProducto;
        let formNombre = event.target.nombreEditar.value;
        let formCategoria =event.target.CategoriaEditar.value;
        let formDireccion =event.target.direccionEditar.value;
        let formCiudad =event.target.CiudadEditar.value;
        let formLatitud = event.target.latitudEditar.value;
        let formLongitud = event.target.longitudEditar.value;
        let formDescripcionTitulo = event.target.tituloDescripcionEditar.value;
        let formDescripcion =event.target.descripcionEditar.value;
        let formPoliticaCancelacion =event.target.politicaCancelacionEditar.value;
        let formPoliticaSaludYSeguridad =event.target.politicaSaludYSeguridadEditar.value;
        let formPoliticaDescripcion =event.target.politicaDescripcionEditar.value;
        let formImagen =event.target.imagenEditar;
    
        if(!(comprobar(formNombre) && comprobar(formCategoria) && comprobar(formDireccion) && comprobar(formCiudad) && comprobar(formDescripcion) && comprobar(formPoliticaCancelacion) && comprobar(formPoliticaSaludYSeguridad)))
            {
                swal("CAMPOS INCOMPLETOS");
                throw console.error("CAMPOS INCOMPLETOS");
            }
    
        let arrayImagenes =[];
    
    
        for(let f=0; f<formImagen.length;f++)
            {
                
                const datosImagenes = {
                    titulo: "hotel",
                    url : formImagen[f].value
                }
    
            
                await fetch(urlStart+"/imagenes", {
                    method: 'POST',
                    headers:{
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(datosImagenes)}
                    )
                    .then(res =>{return res.json()})
                    .then((response) =>{
                    arrayImagenes.push({idImagen: response.idImagen});
                    })
                    .catch(error => console.error('Error:', error));
            }
            
        const datosProducto ={
            idProducto: formId,
            nombre : formNombre,
            tituloDescripcion: formDescripcionTitulo,
            descripcion : formDescripcion,
            categoria : {
                    idCategoria: formCategoria
            },
            ciudad : {
                idCiudad : formCiudad
            },
            normas: formPoliticaDescripcion,
            seguridad: formPoliticaSaludYSeguridad,
            cancelacion: formPoliticaCancelacion,
            latitud: formLatitud,
            longitud: formLongitud,
        }

        
        fetch(urlStart+"/producto", {
            method: 'PUT',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosProducto)}
            )
            .then(res => res.json())
            .then((data)=>swal("Se ha actualizado su producto")
            )
            .catch(error => {console.error('Error:', error)})      
    }
        
    }

export default PaginaEditar;