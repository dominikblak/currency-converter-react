import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    const apiDate = async () => {
      try {
        const response = await axios.get(apiUrl);
        const { date, rates } = response.data;
        console.log(response.data);

        setRatesData({
          status: "success",
          rates,
          date,
        });
      } catch (error) {
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(apiDate, 1000);
  }, []);
  return ratesData;
};
