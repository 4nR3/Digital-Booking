import React, { useState, useEffect,useContext } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "../componentsStyle/busqueda-calendario.css";
import StateContext from "../context/StateContext";

const BusquedaCalendario = ({ onChange }) => {

  const weekDays = ["Do", "Lu", "Ma", "Mie", "Ju", "Vi", "Sa"];
  const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Agos", "Sep", "Oct", "Nov", "Dic"]
  const [fechas, setFechas] = useState([]);
  const { dataContext, setDataContext, idFechasContext, idFechaContext, fechaCalendarContext, setFechaCalendarContext, fechaContext } = useContext(StateContext)


  /* ESTO ME PARECE QUE HAY QUE BORRARLO
  useEffect(() => {
    document.getElementsByClassName("rmdp-input")[0].value = "";

    return () => {
      
     console.log("Fase de Desmontaje2");
     console.log(idFechaContext); 
     
       /* var els=document.getElementsByClassName("rmdp-input")[0];
         els.value = ""
        els.setAttribute("value", "")*/
       /*
        document.getElementsByClassName("rmdp-input")[0].value = "";
      


    };
  }, [idFechaContext]);
  */


  let tamano = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  let numberOfMonths=1;

  if(tamano<=420)
    numberOfMonths=1;
  else
    numberOfMonths=2

  const [shouldCloseCalendar, setShouldCloseCalendar] = useState(true);



  return (

      <DatePicker
        onClose={() => shouldCloseCalendar}
        disableMonthPicker
        disableYearPicker
        value={fechaCalendarContext==""?"":fechas}
        onChange={date=>{
          setFechas(date)
          setFechaCalendarContext(date)
        }}
        numberOfMonths={numberOfMonths}
        className="home"
        arrow={false}
        type={"input-icon"}
        placeholder="Check In - Check Out"
        range
        minDate={new DateObject().subtract(0, "days")}
        maxDate={new DateObject().add(364, "days")}
        weekDays={weekDays}
        months={months}
      >
      </DatePicker>
  );
};

export default BusquedaCalendario;
