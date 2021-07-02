import "./style.css";
import {useEffect, useState} from "react"


const Clock = () => {
    const [date,setDate]= useState(new Date());
    const formattedDate = date.toLocaleDateString( undefined,{
      day:"numeric",
      weekday:"long",
      month:"long",
      year:"numeric",
      hour:"numeric",
      minute:"numeric",
      second:"numeric"
    });
    useEffect(()=>{
      const intervalDate = setInterval(()=>{
        setDate((new Date()))
      },1000);
      return()=>{
        clearInterval(intervalDate)
      }
    },[date]);
  return (
  <p>
    Dzisiaj jest {formattedDate}
  </p>
)};
export default Clock;