import React, { useContext, useState} from 'react';
import "../componentsStyle/ciudades.css";
import BusquedaCalendario from './BusquedaCalendario';
import StateContext from "../context/StateContext"
import "../componentsStyle/buscar.css"
import "../componentsStyle/busqueda-calendario.css"
import link from "../components/Util"
import swal from "sweetalert";
import Select from 'react-select';


const Ciudades = ({ ciudades }) => {

  const { dataContext, setDataContext, ciudadContext, setCiudadContext, categoriaContext, setCategoriaContext,
    idCiudadContext, setIdCiudadContext, idCategoriaContext, setIdCategoriaContext, idFechaContext, setFechaCalendarContext, setIdFechaContext,
    fechaContext, setFechaContext  } = useContext(StateContext)
  
    const [form, setForm] = useState("");

    
  let urlStart = link;

  const handleChange = (e) => {
    setForm(e.target.value,
    );
    
   // setCiudadContext(ciudades[e.target.value-1].nombre)

  };


  const url = urlStart+`/producto/ciudad/`;
  
  function filtrar(){

    
    if(idCiudadContext!==""){
      setForm(idCiudadContext)
    }

 
    const idCiudad = form.value

    let calendario = document.getElementsByClassName("rmdp-input")
    let fechas = calendario[0].value; 

    if((form!=="" || idCiudadContext!=="")  && fechas!=="")
      {filtrarPorCiudadYFecha(idCiudad,fechas);}
    else
    if(form=="" && fechas=="")
      {swal("Seleccione una ciudad o un rango de fechas")
      return;}
    else
    if(form!=="" && fechas=="")
      {nuevoEndpoint(idCiudad);}
    else
    if(form=="" && idCiudadContext=="" && fechas!=="")
      {filtrarPorFechas(fechas);}
      
  
  }


  const nuevoEndpoint = (idCiudad) => {
    if(idCategoriaContext!=""){
      setDataContext(urlStart+"/producto/ciudadYCategoria/"+idCiudad+" "+idCategoriaContext);
      setIdCiudadContext(idCiudad)
      setCiudadContext(ciudades[idCiudad-1].nombre)
      setForm("")



      
  }else{
     setDataContext(`${url}${idCiudad}`);
   /* const btnAtras = document.getElementById("BotonFiltroCiudadOn");
    btnAtras.style.setProperty("display", "inline-flex")*/
    setCiudadContext(ciudades[idCiudad-1].nombre)
    setIdCiudadContext(idCiudad)
    setForm("")

  }  
  };

  function filtrarPorFechas(rango){

      let fechasSeparadas1 = rango.split("/");
      let fechasJuntas="";



      for(let i=0;i<fechasSeparadas1.length;i++)
        {
          fechasJuntas+=fechasSeparadas1[i];
        }

        if(idCategoriaContext!=""){
          setDataContext(urlStart+"/producto/categoriaYFecha/"+idCategoriaContext+" "+fechasJuntas);  
          setIdFechaContext(fechasJuntas)
      }else{
      setDataContext(urlStart+"/producto/fecha/"+fechasJuntas);
      setIdFechaContext(fechasJuntas)
      setFechaContext(rango)
      document.getElementsByClassName("rmdp-input")[0].value = ""

    }  
  }

  function filtrarPorCiudadYFecha(formulario,rango){

    let fechasSeparadas1 = rango.split("/");
    let fechasJuntas="";


    for(let i=0;i<fechasSeparadas1.length;i++)
      {
        fechasJuntas+=fechasSeparadas1[i];
      }
      
      
      if(idCategoriaContext!=""){
        //esta forma es la correcta me parece porque si idCiudadcontext no es "" pero quiero elegir otra ciudad me dan mal los otros
        if(form!==""){
        setDataContext(urlStart+"/producto/categoriaYCiudadYFecha/"+idCategoriaContext+" "+formulario+" "+fechasJuntas);  
        setIdFechaContext(fechasJuntas)
        setIdCiudadContext(formulario)
        setFechaContext(rango)
        setCiudadContext(ciudades[formulario-1].nombre)
        setForm("")
      }else{
        setDataContext(urlStart+"/producto/categoriaYCiudadYFecha/"+idCategoriaContext+" "+idCiudadContext+" "+fechasJuntas);  
        setIdFechaContext(fechasJuntas)
        //setIdCiudadContext(formulario)
        setFechaContext(rango)
        //setCiudadContext(ciudades[formulario-1].nombre)
        setForm("")
      }


    }else{

      if(form!==""){
        setDataContext(urlStart+"/producto/ciudadYFecha/"+formulario+" "+fechasJuntas);
      setIdFechaContext(fechasJuntas)
       //quizá no hace falta usarlo solo con el estado global del id ya estaría
      setIdCiudadContext(formulario)
      setCiudadContext(ciudades[formulario-1].nombre)
      setFechaContext(rango)
      setForm("")
      }else{
        setDataContext(urlStart+"/producto/ciudadYFecha/"+idCiudadContext+" "+fechasJuntas);
        setIdFechaContext(fechasJuntas)
         //quizá no hace falta usarlo solo con el estado global del id ya estaría
       // setCiudadContext(ciudades[formulario-1].nombre)
        setFechaContext(rango)
        setForm("")

      }
      


  }  
    
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
    document.getElementsByClassName("rmdp-input")[0].value = "";
    setFechaCalendarContext("")  
  };

 
    
  




  const options = ciudades.map(item => (
    {value:item.idCiudad, label: item.nombre+","+" "+item.provincia,  variable2:item.pais }))


    const formatOptionLabel =({label, variable2}) => (<><span><i class="fas fa-map-marker-alt" id="iconoSelectCiudad"/> {label}<br></br> <span className='paisCiudad'>{variable2}</span></span></>);


    let style = {
      option:(provided, state) => ({
          ...provided,
          'border-bottom': '3px solid #F0572D',
           'background-color': state.isSelected ? 'white' : 'white',
           color: state.isSelected ? 'black' : 'black',
           'min-height':38 ,
          'font-weight': 'bold',
          'font-size': '17px',
          'z-index': 2,
          }),

      menu:(provided)=>({
          ...provided,
          width: '100%',
      }),

      control:(provided)=>({
          ...provided,
          width: '100%',
          'margin-top': '25px',
          height: '40px',
          color: "black",
          'font-weight': 'bold',
      })


  }

  return (
    <>
      {ciudades && <div >
        <form className='subHeader' onSubmit={handleSubmit}>
 
          <div className='ciudad' >
          
           <div className="selectClass"> 
           <Select   components={<i class="fas fa-backspace"></i> } onChange={setForm} placeholder= {<span>  <i class="fas fa-map-marker-alt"></i>¿A donde vamos?</span>} options={options} formatOptionLabel={formatOptionLabel}
    isSearchable={true} value={form} styles={style}/> </div>          
          </div>
          <BusquedaCalendario />
          <div className='buscar'>
            <input type="submit" class="botonBuscar" placeholder="Buscar" onClick={() => filtrar()} value="Buscar" />
          </div>
        </form>
      </div>
      }

    </>
  )
}

export default Ciudades



/*
            
            <select className='selectClass' onChange={handleChange} defaultValue={"default"}>
              <option value={"default"} disabled selected hidden>¿A donde vamos?</option>
              {ciudades.map(item => (
              <option key={item.idCiudad} type="Ciudades" class="opcionesCiudades" className='opcionCiudadBusqueda' placeholder="Ciudades" value={item.idCiudad}> 
              <h3 className='destino'>{item.nombre}, </h3> <h4 className='pais'>{item.pais}</h4> 
              </option>))}
               
            </select>

*/