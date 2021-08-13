import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    const apiDate = async () => {
      try {
        const response = await axios.get(apiUrl);
        const { rates, date } = response.data;
        console.log(response.data);

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(apiDate, 1000);
  }, []);
  return ratesData;
};
