import React, { useState, useEffect } from "react";
import BloqueHeaderProducto from "../Producto/BloqueHeaderProducto";
import BloquePoliticaProducto from "../Producto/BloquePoliticaProducto";
import CalendarioReserva from '../Producto/CalendarioReserva';
import Credenciales from "../Login/Credenciales";

import '../../componentsStyle/reserva/reserva.css';
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "../../componentsStyle/producto/calendarioReserva.css"
import "../../componentsStyle/reserva/FormularioReservaStyle.css";
import { useFetch } from "../../hooks/useFetch";
import link from "../Util"
import { useContext} from "react";
import StateContext from "../../context/StateContext";

import posicion from '../../img/posicion.png';

import ReservaExitosa from "./ReservaExitosa";
import '../../componentsStyle/reserva/reservaExitosa.css'

import ReservaFallida from "./ReservaFallida"
import swal from "sweetalert";


//Idioma calendario?:
registerLocale('es', es)


const Reserva = (props) => {

    const { fechainicio, setFechainicio } =useContext(StateContext)
    const { fechafin, setFechafin } =useContext(StateContext)

    const[isOpenR, setOpenR] = useState(false);
    const[isOpenF, setOpenF] = useState(false);


    const navigate = useNavigate()

    const [form, setForm] = useState();
    const [ciudad, setCiudad] = useState();
    const [hora, setHora] = useState();
    const [reservaPopup, setReservaPopup] = useState(false);

    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");


    /*Redireccion si no está logeado */

    useEffect(() => {
        if (localStorage.getItem("jwt")==null) {
          navigate('/Login')
          sessionStorage.setItem("alertLogin","true")
        }
        if(fechainicio!==null){
            setCheckin(fechainicio.toLocaleDateString())
        }
        if(fechafin!==null){
             setCheckout(fechafin.toLocaleDateString())
        }


        
      })  //que cambie si cambia usercontext o algo asi?

      let urlStart = link;


    //ESTOS TRES CONST POSTERIORES SOLO LOS PONGOP PARA TRAER INFO

    const {id}  =useParams()

    /*Datos del producto traido de API */
    const {data} = useFetch(urlStart+`/producto/${id}`)
    const producto= data


    /* Horario */
    const horarios = [
        {
            
            "id": 1,
            valor: "10:00:00",
            enPantalla:"10:00 AM"
            
        },
        {
            "id": 2,
            valor: "11:00:00",
            enPantalla:"11:00 AM"
            
        },
        {
            "id": 3,
            valor: "12:00:00",
            enPantalla:"12:00 AM"
            
        },
        {
            "id": 4,
            valor: "13:00:00",
            enPantalla:"01:00 PM"
            
        },
        {
            "id": 5,
            valor: "14:00:00",
            enPantalla:"02:00 PM"
            
        },
        {
            "id": 6,
            valor: "15:00:00",
            enPantalla:"03:00 PM"
            
        },
        {
            "id": 7,
            valor: "16:00:00",
            enPantalla:"04:00 PM"
            
        },
        {
            "id": 8,
            valor: "17:00:00",
            enPantalla:"05:00 PM"
            
        },
        {
            "id": 9,
            valor: "18:00:00",
            enPantalla:"06:00 PM"
            
        },
        {
            "id": 10,
            valor: "19:00:00",
            enPantalla:"07:00 PM"
            
        },
        {
            "id": 11,
            valor: "20:00:00",
            enPantalla:"08:00 PM"
            
        },
        {
            "id": 12,
            valor: "21:00:00",
            enPantalla:"09:00 PM"
            
        },
        {
            "id": 13,
            valor: "22:00:00",
            enPantalla:"10:00 PM"
            
        },
        {
            "id": 14,
            valor: "23:00:00",
            enPantalla:"11:00 PM"
            
        }]
    
   

    /* Calendario */

    const onChange = (dates) => {

        if(fechafin==null){
            if(dates[0]<fechainicio){
                {dates[1]=fechainicio;}
            } 
        }
  
        let fechaI = dates[0];
        let fechaD = dates[1];
    
        if(fechaD!=null)
        for(let f=0;f<ocupado.length;f++)
            {if(fechaI<ocupado[f] && ocupado[f]<fechaD){
                swal("Esta eligiendo una fecha con una reserva en medio");
                return;
                }
            }
  
        const [start, end] = dates;
        setFechainicio(start);
        setFechafin(end);
        setFechainicio(start)
        setFechafin(end)
            setCheckin(dates[0].toLocaleDateString())
            setCheckout("")
            setCheckout(dates[1].toLocaleDateString())
      };


    let tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    let meses = 0;

    if (tamano <= 420)
        meses = 1;
    else
        meses = 2

    
        let ocupado= []; 

        const url = urlStart+`/reserva/producto/${id}`;
    
        function obtenerFechas(){
    
          const configuracion ={
          method: 'GET',
          headers: {
            "content-type": "application/json; charset=UTF-8",
          }
          }
    
          fetch(url,configuracion)
          .then(respuesta =>{
            return respuesta.json();
          })
          .then(data=>{
                  
            for(let i=0;i<data.length;i++)
              {
              
              let fechaI = new Date(data[i].inicioReserva);
              let fechaD = new Date(data[i].finReserva);
    
              for(let f=fechaI;f<=fechaD;f.setDate(f.getDate()+1))
                {ocupado.push(new Date(f));}
                
              }
    
          })
          
        }
    
        obtenerFechas();

    /* Datos API*/
    const nombre = Credenciales.nombre;
    const apellido = Credenciales.apellido;
    const email = Credenciales.email;
    const idUsuario = localStorage.getItem("idUsuario")


    /* POST a la API*/

   // const idDelProducto = Number({id})

  
  const handleChangeHora = (e) => {
      setHora(e.target.value,
      );

    };
  
    const handleChangeCiudad = (e) => {
      setCiudad(e.target.value,);

    };
  
  
  const handleSubmit = (e) => {
      e.preventDefault();
     // e.target.reset()
  
    };
  
  const enviarDatos = ()=>{

    if(fechainicio ==null || fechafin == null || ciudad==undefined || ciudad.length==0 )
        {swal({
            text: "Complete todos los campos",
          });
        return;
    }

    //const fecha = new Date
    const datos = {
        horaReserva: hora ,//fecha.toLocaleTimeString() , //va la hora actual o la del chekin?
        inicioReserva: fechainicio,
        finReserva : fechafin,
        productos: {idProducto: id},
        usuarios : {idUsuario : idUsuario,
                    rol:{
                        nombre : "USER",
                    }
        }  //traer del "login", falta el token?
        
        }


      console.log(JSON.stringify(datos))
    
    
    //agegar un if que solo me haga el fetch si no elegi una hora y complete lo de ciudad, && o and
    
    let jwt = localStorage.getItem("jwt");

if(ciudad !==undefined && hora!==undefined){

    fetch(urlStart+'/reserva', {
      method: 'POST',
      headers:{
        authorization: 'Bearer ' + jwt,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos)
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then((response) =>{ 
        

       if (response.status >= 400 || response.status <= 599) { 
        {setOpenF(true)  
        }
    
    }else{
        setOpenR(true)}
        setFechafin(null)
        setFechainicio(null)
        //Aca tiene que saltar el pop up y desde el popup redireccionar al home creo, supongo que con un state?
        });
}}

//console.log(producto.imagen[0].url);


    return (

        <div>
        {producto && <> 

        <div className="template__reserva__container">

                <ReservaExitosa isOpenR={isOpenR} close={() => setOpenR(false)} ></ReservaExitosa>
                <ReservaFallida isOpenF={isOpenF} close={() => setOpenF(false)} ></ReservaFallida>

            <div>
                <BloqueHeaderProducto nombre={producto.nombre} categoria={producto.categoria.titulo} />

                <form action='/' onSubmit={handleSubmit} method="post"  className='formularioReserva'>

                <div className="form__calendario__detalle__container">

                    <div className="form__calendario__container">

                        <h2 className="reserva__form__titulo">Completá tus datos</h2>

                            <div className="form__container_reserva">

                                <div className="form__container2_reserva">
                                    <div className='div1Reserva'>
                                        <label for="nombre" className="form__label">Nombre</label>
                                        <input type="text" name="nombre" id="nombre" value={nombre} disabled={true} className="form__input_reserva form__input-reserva" />
                                    </div>

                                    <div className='div2reserva'>
                                        <label for="apellido" className="form__label form__input-reserva-derecha">Apellido</label>
                                        <input type="text" name="apellido" id="apellido" value={apellido} disabled={true}
                                            className="form__input_reserva form__input-reserva form__input-reserva-derecha" /><br />
                                    </div>
                                </div>

                                <div className="form__container2_reserva">
                                    <div className='div1Reserva'>
                                        <label for="email" className="form__label">Correo electrónico</label>
                                        <input type="email" name="email" id="email" value={email} disabled={true} className="form__input_reserva" /><br />
                                    </div>

                                    <div className='div2reserva'>
                                        <label for="ciudad" className="form__label">Ciudad</label>
                                        <input type="text" name="ciudad" id="ciudad" onChange={handleChangeCiudad} placeholder="Ciudad"
                                            className="form__input_ciudad form__input-pass" />
                                    </div>
                                </div>


                            </div>



                        <div className="reserva__calendario__container">
                            <h2 className="reserva__calendario__titulo">Seleccioná tu fecha de reserva</h2>

                            <div className="reserva__calendario__container__libreria" >

                            <div className="calendarioReserva" id="dateSearchBar">
                                <div className="calendar-container" id="calendars">


                                    <DatePicker
                                        className="DatePicker"
                                        locale="es"

                                        selected={fechainicio}
                                        onChange={onChange}
                                        startDate={fechainicio}
                                        endDate={fechafin}
                                        selectsRange

                                        monthsShown={meses}
                                        dateFormat="dd 'de' MMM. 'de' yyyy"
                                        closeOnScroll={true}
                                        excludeDates={ocupado}
                                        inline

                                        minDate={new Date()}
                                        value={fechainicio}
                                        required={true}
                    
                                    />
                                </div>
                            </div>

                            </div>
                            

                        </div>
                        <h2 className="reserva__horario__titulo">Tu horario de llegada</h2>
                        <div className='horas__container'>
                            <div className='horas__container__detalles'>
                            <h4 className='reserva__info__horario'>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</h4>
                            <label for="horario" className="form__label_hora">Indicá tu hora estimada de llegada</label>

                            
                            <select className='form__input_hora' onChange={handleChangeHora}  >
                                <option value="" disabled selected hidden>Seleccionar Hora de llegada</option>
                                {horarios.map(item => (<option key={item.id} type="Ciudades" class="horas" placeholder="Horario" value={item.valor}> <h3 className='horario'>{item.enPantalla} </h3> </option>))}

                            </select>
                            </div>
                        </div>
                    </div>

                    <div className="card__detalle__reserva">
                        <h2 className="card__reserva__detalle__ttl">Detalle de la reserva</h2>
                        <div className="card__detalle_reserva__img__datos" >


                           


                                <div className="reserva__img__container">


                        <img className="imagen_reserva"  alt="" src={producto.imagen[0].url} />
                        </div>

                                

                                <div className="reserva__datos__container">


                        <h3 className='card__reserva__categoria'>{producto.categoria.titulo}</h3>
                        <h4 className='card__reserva__nombreHospedaje'>{producto.nombre}</h4>
                        <span className="puntuacion reserva__puntuacionM">
                                    <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                        </span>
                        <div className="reserva__ubicacion__container ">
                            <img className="reserva__ubicacion__img" src={posicion} alt="posicion" />
                            <p className="reserva__ubicacion__txt">{producto.ciudad.nombre}, {producto.ciudad.provincia}, {producto.ciudad.pais} </p>
                        </div>

                        <div className="reserva__checkHorario__container">
                          
                           <div className="check"> <p className='reserva__checkIn'>Check in </p> <p className="check__fecha_in">{checkin.length>0 ? checkin:<></>}</p></div>
                           <div className="check"> <p className='reserva__checkOut'>Check out </p> <p className="check__fecha">{checkout.length>0 ? checkout:<></>}</p></div>
                        </div>
                        <button type="submit" className="card__reserva__detalle__btn" onClick={() => enviarDatos()}>Confirmar reserva</button>

                          </div>


                        </div>




                    </div>

                </div>
                </form>

                <BloquePoliticaProducto normas={producto.normas} seguridad={producto.seguridad} cancelacion={producto.cancelacion}/>
            </div>


            
        </div>
        </>
    }
      </div>
    )
}

export default Reserva;



/* 
<>{fechainicio && <>
<p className='reserva__checkIn'>Check in  {fechainicio[0]} </p>
<p className='reserva__checkOut'>Check out {fechafin[0]}</p> </>}</>
                             */