import { useEffect, useState } from "react";

export useRatesData = ()=>{
    const [ratesData, setRatesData] = useState({
        state : "loading",
    });
    useEffect(()=>{
        cosnt fetchRates = async()=>{
            try{
                const response = await fetch("https://api.exchangerate.host/convert?from=USD&to=EUR");

                if(!response.ok){
                    throw new Error (response.statusText);
                }
                const {ratesData, date} = await response.json();

                setRatesData({
                    state:"success",
                    rates,
                    date,
                });
            }
        }
    })
}