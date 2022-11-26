
/* CON OTRA LIBRERIA */
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "../../componentsStyle/producto/calendarioReserva.css"
import { useParams } from "react-router-dom";
import link from "../Util"
import swal from "sweetalert";
import { useContext} from "react";
import StateContext from "../../context/StateContext";


registerLocale('es', es)

const CalendarioReserva = (props) => {

  const { fechainicio, setFechainicio } =useContext(StateContext)
  const { fechafin, setFechafin } =useContext(StateContext)
  

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  let urlStart = link;

  const onChange = (dates) => {

      if(endDate==null){
          if(dates[0]<startDate){
              {dates[1]=startDate;}
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
      setStartDate(start);
      setEndDate(end);
      setFechainicio(start)
      setFechafin(end)
    };

  const { id } = useParams()

  let tamano;
  const [meses, setMeses] = useState(1);


  useEffect(() => {
    tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    if (tamano <= 420)
        setMeses(1);
      else
        setMeses(2);
  })




  const ocupado = [];

  const url = urlStart+`/reserva/producto/${id}`;

  function obtenerFechas() {

    const configuracion = {
      method: 'GET',
      headers: {
        "content-type": "application/json; charset=UTF-8",
      }
    }

    fetch(url, configuracion)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(data => {

        for (let f = 0; f < data.length; f++) {
          let fechaI = new Date(data[f].inicioReserva);
          let fechaD = new Date(data[f].finReserva);

          for (let f = fechaI; f <= fechaD; f.setDate(f.getDate() + 1)) { ocupado.push(new Date(f)); }

        }

      })

  }

  obtenerFechas();

  return (
    <>
      <div className="calendarioReserva" id="dateSearchBar">
        <div className="calendar-container" id="calendars">
          <DatePicker
            className="DatePicker"
            locale="es"
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange

            monthsShown={meses}
            dateFormat="dd 'de' MMM. 'de' yyyy"
            closeOnScroll={true}
            excludeDates={ocupado}
            inline

            minDate={new Date()}
            value={startDate}

          />
        </div>
      </div>
    </>
  )
}
export default CalendarioReserva; 