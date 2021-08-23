import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../apiUrl";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  // const apiUrl = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const { date, rates } = response.data;
        console.log(response.data);

        setRatesData({
          date,
          rates,
          status: "success",
        });
      } catch (error) {
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(fetchApiData, 3000);
  }, []);
  return ratesData;
};
